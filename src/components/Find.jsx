import React, { useState } from 'react';

const api = {
    base: 'https://pokeapi.co/api/v2/pokemon/'
}

const Find = () => {
    const [ query, setQuery ] = useState('')
    const [ pokemon, setPokemon ] = useState({})

    const handleFindPokemon = () => {
        const str = query.toLowerCase()
        
        isNaN(query) && 

        fetch(`${api.base}${str}`)
            .then(result => result.json())
            .then(result => {
                setPokemon(result)
                setQuery('')
            })
            .catch(err => 
                console.log(err), 
                setQuery('')
            )
    }

    return (
        <div className="col-10 col-md-5 Find-content">
            <form onSubmit={() => handleFindPokemon()}>
                <div className="Find-content-form">
                    <div className="ButtonIn">
                        <input 
                            className="Find-content-form-input"
                            placeholder="Search by name"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            required
                        />
                        <button 
                            type='submit' 
                            className="Find-content-form-button"
                        >
                            <i className="fas fa-search Find-content-form-button-i"></i>
                        </button>
                    </div>
                </div>
            </form>
            <div className="Find-content-result">
                <ul className="Find-content-result-ul">
                    <li className="Find-content-result-ul-li">Name: <b>{ typeof pokemon.name === 'string' && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)  }</b></li>
                    <li className="Find-content-result-ul-li">Base experience: <b>{pokemon.base_experience}</b></li>
                    <li className="Find-content-result-ul-li">Height: <b>{pokemon.height}</b></li>
                    <li className="Find-content-result-ul-li">Weight: <b>{pokemon.weight}</b></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Find;