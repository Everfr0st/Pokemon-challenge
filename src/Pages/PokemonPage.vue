<template>
    <div>
        <h1 v-if="!pokemon">Espere...</h1>
        <div v-else>
            <h1 class="fade-in"> ¿Quién es este pokemón? </h1>

            <PokemonPicture 
            v-bind:pokemonId="pokemon.id" 
            :showPokemon="showPokemon" 
            /> <!-- v-bind y solo : es lo mismo -->
            
            <PokemonOptions 
            :pokemons="pokemonArr"
            @selection-pokemon="checkAnswer"
            />
            
            <template v-if="showAnswer" class="divv">
                <h1 class="fade-in">{{ message }}</h1>
                <button @click="newGame" class="new">
                    Nuevo Juego
                </button>
            </template>

            <h6>Odié este challenge con todo mi ser, xoxo </h6>

        </div>  
    </div>
</template>

<script>

import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'

import getPokemonOptions from '../helpers/getPokemonOptions'
//console.log(getPokemonOptions())

export default {
    components: { PokemonOptions, PokemonPicture },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },

    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()

            const rndInt = Math.floor( Math.random() * 4)
            this.pokemon = this.pokemonArr[ rndInt ]
            console.log(rndInt)
        },
        checkAnswer( SelectedId ) {
            this.showPokemon = true
            this.showAnswer = true
            if ( SelectedId === this.pokemon.id ){
                this.message = `Correcto, ${ this.pokemon.name}`
            }
            else {
                this.message = `Oh, oh, el pokemón era ${ this.pokemon.name }`
            }
        },
        newGame() {
            this.showPokemon = false
            this.showAnswer  = false
            this.pokemonArr  = []
            this.pokemon     = null
            this.mixPokemonArray()            
        }
    },
    mounted() {
        this.mixPokemonArray()
    }
}
</script>

<style scoped>
h1{
    text-align: center;
    font-weight: bold;
    font-family: arial, helvetica, roboto, "new times roman", lato;
}

.new {
    background-color: #f44336; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    position: absolute;
  top: 80%;
  left: 51%;
  transform: translate(-50%, -50%);
}

h6 {
    position: absolute;
    bottom: 5%;
    left: 44%;
}
</style>