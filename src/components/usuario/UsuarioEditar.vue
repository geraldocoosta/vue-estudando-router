<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
    <hr />
    <p>
      <strong>Código</strong>
      {{ id }}
    </p>
    <p>
      <!-- Para capturar um query param, usar
      o objeto $route, acessando query
      e depois o nome do parametro-->
      <strong>Lingua</strong>
      {{ $route.query.lingua }}
    </p>
    <button primario @click="confirmou = true">Confirmar</button>
    <div id="rodape">Curso de Vue</div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      confirmou: false
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmou) {
      next();
    } else {
      if (confirm("Tem certeza?")) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>
<style>
#rodape {
  margin-top: 800px;
}
</style>
