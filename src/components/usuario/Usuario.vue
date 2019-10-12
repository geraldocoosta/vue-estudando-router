<template>
  <div class="usuario">
    <h2>Usuario</h2>
    <hr />
    <p>
      <strong>Código</strong>
      {{ id }}
    </p>
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>
<script>
export default {
  props: ["id"],
  // data() {
  //   // forma de pegar param da url
  //   return {
  //     id: this.$route.params.id
  //   };
  // },
  // watch: {
  //   //para usar o watch no route, podemos receber
  //   // dois parametros, sendo o to e o from
  //   // estratégia usada para mudar o valor do
  //   // data.id quando navegar entre o mesmo componente
  //   // com parametros diferentes
  //   $route(to) {
  //     this.id = to.params.id;
  //   }
  // },
  methods: {
    irParaInicio() {
      // navegando de forma programatica
      // como é usado o Vue.use no router
      // eu posso fazer isso com $router
      // sem importar
      this.$router.push({ path: "/" });
    }
  }
};
</script>
