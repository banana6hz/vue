<template>
    <h1 style="text-align:center">
        {{hello}}
    </h1>
</template>
<script>
import mockdata from '../mock.js'// 导入假数据接口
export default {
    data(){
        return{
            hello:'I am fine'
        }
    },
    methods:{
        mockDate(){
            axios.get('/msg1').then(response => {
                let res = response.data
                console.log('mockdate',res)
            })
        },
    }
}
</script>

