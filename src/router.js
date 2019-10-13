import Vue from "vue";
import Router from "vue-router";
import Inicio from "@/components/Inicio";
import Menu from "@/components/template/Menu";
import Alt from "@/components/template/Alt";

import Usuario from "@/components/usuario/Usuario";
import UsuarioLista from "@/components/usuario/UsuarioLista";
import UsuarioDetalhe from "@/components/usuario/UsuarioDetalhe";
import UsuarioEditar from "@/components/usuario/UsuarioEditar";

/*
  Posso acessar a rota a partir de this.$router
  a rota a partir de this.$route
*/
Vue.use(Router);

const router = new Router({
  mode: "history",
  scrollBehavior(to, _, savedPosition) {
    // essa função serve para quando queremos
    // fazer uma navegação via # para levar a
    // alguma parte especifica de uma página
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
  },
  routes: [
    {
      path: "/",
      name: "inicio",
      // carregando componentes diferentes com router-view
      // nomeados, se eu tiver
      components: {
        menu: Menu,
        default: Inicio
      }
      // component: Inicio,
    },
    {
      path: "/usuario",
      // component: Usuario,
      components: {
        menu: Alt,
        default: Usuario,
        menuInferior: Alt
      },
      // parametros da rota serão passados via props
      props: true,
      name: "usuario",
      children: [
        {
          path: "",
          component: UsuarioLista,
          name: "usuarioLista"
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
          props: true,
          name: "usuarioDetalhes",
          beforeEnter(to, from, next) {
            console.log("to -> ", to);
            console.log("from -> ", from);
            console.log("antes da rota -> usuario detalhe");
            next();
          }
        },
        {
          path: ":id/editar",
          component: UsuarioEditar,
          props: true,
          name: "usuarioEditar"
        }
      ]
    },
    {
      /* usando redirect */
      path: "/redirect",
      redirect: "/usuario"
    },
    {
      /* usando redirect também
      porém, esse irá ser pra qualquer
      url não suportada (não cadastrada no routes)
      */
      path: "*",
      redirect: "/"
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log("antes das rotas -> global");
  // podemos passar um objeto para o next
  // se passarmos false, ele aborta a navegação
  // se chamar apenas o next, ele navega normalmente
  // posso passar o path direto
  // o to e o from tem o atributo path, que mostra o path
  // definido no router acima
  //
  // if (to.path !== '/usuario')
  //   next('/usuario');
  // else
  //   next()
  next();
});

export default router;
