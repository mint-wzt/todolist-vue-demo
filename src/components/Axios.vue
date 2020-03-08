<template>
    <div>
        <p>这里有HTTP请求</p>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Axios",
        created() {
            // get 请求
            // http://localhost:8080/data.json?id=12
            axios.get('/data.json', {
                params: {
                    id: 12
                }
            }).then(res => {
                console.log(res)
            })
            axios.get({
                method: 'get',
                url: '/data.json',
                params: {
                    id: 12
                }
            }).then(res => {
                console.log(res)
            })

            // post
            // form-data 表单提交（图片上传、文件上传）
            // application/json
            let data = {
                id: 12
            }
            axios.post('/post', data).then(res => {
                console.log(res)
            })

            axios.post({
                method: 'post',
                url: '/post',
                data: data
            }).then(res => {
                console.log(res)
            })

            // form-data 请求
            let formData = new FormData()
            for (let key in data) {
                formData.append(key, data[key])
            }
            axios.post('/post', formData).then(res => {
                console.log(res)
            })
            // put
            axios.put('/put', data).then(res => {
                console.log(res)
            })
            // patch
            axios.patch('/patch', data).then(res => {
                console.log(res)
            })
            // delete 请求
            axios.delete('/delete', {
                params: {
                    id: 12
                }
            }).then(res => {
                console.log(res)
            })

            axios.delete('/delete', {
                data: {
                    id: 12
                }
            }).then(res => {
                console.log(res)
            })

            axios({
                method: 'delete',
                url: '/delete',
                params: {},
                data: {}
            }).then(res => {
                console.log(res)
            })

            // axios 并发请求 同时进行多个请求，统一处理返回值
            // axios.all axios.spread
            axios.all([
                axios.get('/data.json'),
                axios.get('/city.json')
            ]).then(axios.spread((dataRes, cityRes) => {
                console.log(dataRes, cityRes)
            }))

        }
    }
</script>

<style scoped>

</style>
