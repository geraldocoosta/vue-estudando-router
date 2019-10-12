<template>
  <nav class="menu">
    <ul>
      <!-- 
        to = path para rota, pode ser também com name, acho bem melhor
        tag = tag que "substituira o router link", serve pra podermos fazer
        a ligação sem ser pela tag a e sim com outra
        active-class= quando o link estiver ativo, essa classe também irá ficar
        exact = exatamente aquele path
      -->
      <router-link to="/" tag="li" active-class="active" exact>
        <a>Inicio</a>
      </router-link>
      <router-link to="/usuario/1" tag="li" active-class="active">
        <a>Usuario 1</a>
      </router-link>
      <router-link to="/usuario/2" tag="li" active-class="active">
        <a>Usuario 2</a>
      </router-link>
    </ul>
  </nav>
</template>
