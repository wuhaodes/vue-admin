<template>
    <div class="index">
        <header-nav></header-nav>
        <left-menu></left-menu>
        <router-view></router-view>
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
</style>

