import Vue from "vue";
import Router from "vue-router";
import Inicio from "@/components/Inicio";

import Usuario from "@/components/usuario/Usuario";
import UsuarioLista from "@/components/usuario/UsuarioLista";
import UsuarioDetalhe from "@/components/usuario/UsuarioDetalhe";
import UsuarioEditar from "@/components/usuario/UsuarioEditar";

/*
  Posso acessar a rota a partir de this.$router
  a rota a partir de this.$route
*/
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Inicio
    },
    {
      path: "/usuario",
      component: Usuario,
      // parametros da rota serão passados via props
      props: true,
      children: [
        {
          path: "",
          component: UsuarioLista
        },
        {
          // se os children conterem uma barra antes do nome
          // a url vai ser a partir da raiz
          // Então, se aqui fosse /:id
          // o link para essa rota seria
          // localhost:8080/idqualquer
          // mesmo sendo children do /usuario
          // para não acontecer isso, deve ser
          // usado o caminho sem barra no começo
          path: ":id",
          component: UsuarioDetalhe,
          props: true
        },
        {
          path: ":id/editar",
          component: UsuarioEditar,
          props: true
        }
      ]
    }
  ]
});
