<template>
  <div>
    <h1 v-text="titulo" class="centralizado">HOME</h1>
    <input v-on:input="filtro = $event.target.value"
      type="search" class="filtro" placeholder="filtre pelo título da foto">
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo"/>
          <meu-botao 
            rotulo="remover" 
            tipo="button" 
            :confirmacao="true" 
            @botaoAtivado="remove(foto)"
            estilo="perigo"/>

        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';
export default {

  components: {

    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  data(){
    console.log("Home.vue -> data()");
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

  methods: {
    remove(foto){
      alert(foto.titulo);
    }
  },

  created() { /* uma etapa do ciclo de vida da aplicação*/
    console.log("Home.vue -> created()");  
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
</style>
