import pokemonApi from "../api/pokemonApi"

const getPokemons = () => {
    const pokemonsArr = Array.from( Array(650) )
    return pokemonsArr.map( ( _ , index ) => index+1 )
}

const getPokemonOptions = async() => {
    
    const mixedPokemons = getPokemons()
    .sort( () => Math.random() - 0.5 ) //El -0,5 se agrega porque metodo random inicia en un número que no es cero, es cercano a 0,5
    
    const pokemons = await getPokemnoNames( mixedPokemons.splice(0,4) ) //escojo los primeros 4 pokemons del array

    console.table(pokemons)

    return pokemons
    
}

const getPokemnoNames = async( [a, b, c, d] = [] ) => {
    
    // const resp = await pokemonApi.get(`/50`)
    // console.log(resp.data.name, resp.data.id)
    // console.log(a, b, c, d)

    const arrPromise = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`)
    ]
    
    const [p1, p2, p3, p4] = await Promise.all( arrPromise )
    
    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id}
    ]
}

export default getPokemonOptions