<template>
  <div class="usuario">
    <h2>Usuario</h2>
    <hr />
    <!-- Aqui serão aplicadas as rotas aninhadas -->
    <router-view />
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>
<script>
export default {
  methods: {
    irParaInicio() {
      // navegando de forma programatica
      // como é usado o Vue.use no router
      // eu posso fazer isso com $router
      // sem importar
      // this.$router.push({ path: "/" });
      // this.$router.push("/");
      this.$router.push({ name: "inicio" });
    }
  }
};
</script>
