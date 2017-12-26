<style>
    
.wcimg {
    height: 200px;
    width: 100%;
}

</style>
<template>
    <div id="app">
        <wc-img :url="url" error="/static/error.svg" loading="/static/loading.svg" class="wcimg" v-for="(url,key) in urls" :key="key"/>
    </div>
</template>
<script>

    export default {
        name: 'app',

        data () {
            return {
                urls: ['http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/06/07/ChMkJlo50b6IBlQLAAFGULqiVhcAAjUpgN-M7wAAUZo647.jpg','http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/04/09/ChMkJ1bWSzqIZmYNAAkG_AlqiJ8AAMRFgMMjFQACQcU945.jpg','http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/04/09/ChMkJ1bWSzqIZmYNAAkG_AlqiJ8AAMRFgMMjFQACQcU9452.jpg','http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/09/01/ChMkJ1jq7sOIfZrIABH47H14SrgAAbgdgKliXQAEfkE592.jpg','http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/09/01/ChMkJljq7r-IdXdAAAruLm_K8N0AAbgdgJYFRoACu5G514.jpg']
            }
        },
    }
</script>