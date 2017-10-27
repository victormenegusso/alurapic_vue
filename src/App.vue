<template>
  <div class="corpo">

    <!--
    <nav>
      <ul>   
          <li v-for="route in routes">
            <router-link :to="route.path ? route.path : '/'">{{route.titulo}}</router-link>
          </li>
      </ul>
    </nav
    -->
    <!--<nav>
      <ul>   
          <!--    
          <li><a href="/">Home</a></li>
          <li><a href="/cadastro">Cadastro</a></li>
          -->
          <!--
>          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/cadastro">Cadastro</router-link></li>
          -->
          <!--
          <li v-for="route in routes">
            <router-link :to="route.path ? route.path : '/'">{{route.titulo}}</router-link>
          </li>
      </ul>
    </nav>-->

    
    <meu-menu :rotas="routes"/>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import { routes }  from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {
  components: {
    'meu-menu' : Menu
  },
  data() {

    return {

      routes
    }

  }

}

</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }
  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }
</style>
