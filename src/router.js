import Vue from "vue";
import Router from "vue-router";
import Inicio from "@/components/Inicio";
import Usuario from "@/components/usuario/Usuario";

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
      component: Inicio,
    },
    {
      path: "/usuario",
      component: Usuario
    }
  ]
});
