<template>
  <div id="app-container">
    <mt-header fixed title="固定在顶部"></mt-header>
    <transition >
      <router-view></router-view>
    </transition>
    <footer>
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/member">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item" to="/shopcart">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/search">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {

  }
}
</script>

<style>
#app-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  overflow-x: hidden;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%)
}
.v-enter-active,.v-leave-active{
  transition: all .4s ;
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
</style>
