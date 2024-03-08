import axios from "axios";
import React, { useEffect, useState } from "react";

const GetPokemon = (props) => {

    const [ pokemon, setPokemon ] = useState([]);
    const [ pokemon2, setPokemon2 ] = useState([]);

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/?limit=807')    
            .then(res => {
                console.log("All dem Pokes",res.data);
                setPokemon(res.data.results);
            })
            .catch((err) => console.log(err));
    }, []); 

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/ditto')    
            .then(res => {
                console.log("Single Poke",res.data);
                setPokemon2(res.data);
            })
            .catch((err) => console.log(err));
    }, []); 

    return (
        <div className="Pokemon">
            <h1>'Fetch' Pokemons With Axios</h1>
            <h3 style={{color:"white"}}>{pokemon2.name}</h3>
            <p>
                {
                pokemon.length > 0 && pokemon.map((pokeObj, index)=>{
                    return (<li key={index}>{pokeObj.name}</li>)
                })}
            </p>
        </div>
    );
}

export default GetPokemon;
