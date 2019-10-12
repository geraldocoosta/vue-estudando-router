<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr />
    <p>
      <strong>Código</strong>
      {{ id }}
    </p>
    <!-- tags e classes usadas no router linkt
    serão aplicado na tag gerada 
    Para que o link seja dinamico, foi usado 
    aspas duplas primeiro, depois crase pra deixar dinamico
    as duas formas abaixo são validas,
    para passar query params, usar o atributo query no objeto
    passado para o to
    -->
    <!-- <router-link primario tag="button" :to="`/usuario/${route.params.id}/editar`"> -->
    <router-link
      primario
      tag="button"
      :to="{ name: 'usuarioEditar', params: { id }, query: { lingua: 'pt' } }"
      >Editar</router-link
    >
  </div>
</template>
<script>
export default {
  props: ["id"]
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
};
</script>
