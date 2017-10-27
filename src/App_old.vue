<template>
  <div class="corpo">
    <h1 v-text="titulo" class="centralizado"></h1>
    <!-- <h1>{{ titulo }}</h1> -->
    <!-- <img v-bind:src="foto.url" v-bind:alt="foto.titulo" /> -->
    <!--
    <img :src="foto1.url" :alt="foto1.titulo" />
    <img :src="foto2.url" :alt="foto2.titulo" />
    -->
    <input v-on:input="filtro = $event.target.value"
      type="search" class="filtro" placeholder="filtre pelo título da foto">
    <ul class="lista-fotos">
      <!--<li class="lista-fotos-item" v-for="foto of fotos">-->
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <!--
        <div class="painel">
          <h2 class="painel-titulo">{{foto.titulo}}</h2>
          <div class="painel-corpo">

            <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">

          </div>
        </div>
        -->
        <meu-painel :titulo="foto.titulo">
          <!--<img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo">-->
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo"/>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';
import ImagemResponsiva from './components/shared/imagem-responsiva/ImagemResponsiva.vue'

export default {

  components: {

    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva
  },

  data(){
    console.log("App.vue -> data()");
    return {
      titulo: 'AluraPIC',
      
      fotos:[
        {
        url: 'https://i.ytimg.com/vi/UUq3Zu6WEk4/hqdefault.jpg',
        titulo: 'nasus'
        },
        {
          url: 'http://st.elohell.net/public/chill/49f9ff040c085852925f100de9f11e54.jpg',
          titulo: 'azir'
        }
      ],
      filtro:''
      
    }
  },
  computed: {
    fotosComFiltro(){
      if(this.filtro){
        //return [];
        let exp = new RegExp(this.filtro.trim(),'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }
      else{
        return this.fotos;
      }
    }
  },
  created() { /* uma etapa do ciclo de vida da aplicação*/
    console.log("App.vue -> created()");  
    //let promise = this.$http.get('http://localhost:3000/v1/fotos');
    /*
    promise.then(res => {
     res.json().then(fotosRest => this.fotos = fotosRest);
    });
    */
    /*
    promise
      .then(res => res.json())
      .then(fotos => this.fotos = fotos);
    */
    /*
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos);
    */
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
    
  }
}
</script>

<style>
  .centralizado {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }


  .imagem-responsiva {
    width: 100%;
  }

  .filtro {
    display: block;
    width: 100%;
  }

  
/*
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
  */
</style>
