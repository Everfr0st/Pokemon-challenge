<template>
  <body>
    
    <PokemonPage/>
    
  </body>
  

</template>

<script>

import PokemonPage from './Pages/PokemonPage.vue';
import PokemonOptions from './components/PokemonOptions.vue'
import PokemonPicture from './components/PokemonPicture.vue'

export default {
  name: 'App',
  components: {
    PokemonPage,
    PokemonOptions,
    PokemonPicture
}
}
</script>

<style>

</style>