// const fetch = require('node-fetch');
import fetch from 'node-fetch';
let chaind = 250;
let address ='0x5cc61a78f164885776aa610fb0fe1257df78e59b';

const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
const data = await response.json();

console.log(data);

/*

let cadena = (`api.covalenthq.com/v1/${chaind}/address/${address}/transfers_v2/`);
console.log(cadena)

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((respuesta)=> {
        return respuesta.json()
    }).then((resp)=> {
        console.log(resp);
    }).catch((err)=> {
        console.log(err)
    })

*/