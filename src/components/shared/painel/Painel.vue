<template>
    <div class="painel">
        <!--<h2 class="painel-titulo" v-on:dblclick="visivel = !visivel">{{ titulo }}</h2> -->
        <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}</h2>
        <transition name="painel-fade">
          <div class="painel-corpo" v-show="visivel">
            <slot>
            </slot> <!-- slot serve para o vue saber onde deve jogar os componentes-->
          </div>
        </transition>
        <!--
        <div class="painel-corpo">
        </div>
        -->
    </div><!-- fim painel -->
</template>

<script>
export default {
    props: ['titulo'] , /* são as propriedades do componente, por onde recebe as informacoes, vira um :titulo*/
    data() {
      return {
        visivel: true
      }
    }

}
</script>

<style scoped>  <!-- scoped serve para o style so se apĺicar no componente -->
   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
   
  * {
    box-shadow: 5px 5px 5px;
  }

  .painel-fade-enter, .painel-fade-leave-active {
    opacity: 0
  }

  .painel-fade-enter-active, .painel-fade-leave-active {
    transition: opacity .4s
  }
</style>
