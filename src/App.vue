<template>
    <div>
        <h1 class="txt">{{text}}</h1>
        <div class="play"></div>
        <router-view/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            text:'Hello banana 🍌'
        }
    }
}
</script>
<style>
.txt{color:brown;text-align:center;}
</style>


