<template>
    <div class="index">
        <header-nav></header-nav>
        <left-menu></left-menu>
        <div class="right-container">
            <router-view></router-view>
        </div>
        
    </div>
</template>


<script>
import HeaderNav from '../components/HeaderNav'
import LeftMenu from '../components/LeftMenu'
export default {
    name: 'Index',
    components: {
        HeaderNav,
        LeftMenu
    }
};
</script>
<style scoped>
.index{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.right-container{
    position: relative;
    width: 100%;
    height: 100%;
    top: 60px;
    left: 200px;
}
</style>

