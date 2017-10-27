import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';
/*
export const routes = [
    
        { path: '', component: Home },
        { path: '/cadastro', component: Cadastro }
    
    ];
    */

export const routes = [
    {
        path: '', /* deixar vazio eh a raiz*/
        component: Home,
        titulo: 'Home' /*adicionado para montar o menu de navegacao*/
    },
    {
        path: '/cadastro', 
        component: Cadastro,
        titulo: 'Cadastro' /*adicionado para montar o menu de navegacao*/
    }
]
