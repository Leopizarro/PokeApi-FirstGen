import React, {useEffect, useState} from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import HeroCard from './components/HeroCard';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import NavigationBar from './components/NavigationBar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import PortraitImg from './components/PortraitImg';
import Footer from './components/Footer';



const App = () => {
  const [pkmns, setPkmns] = useState([]);
  const [searchfield, setSearchField] = useState('');
  const [filtered, setFiltered] = useState([]);


  async function obtenerPokemons(url){
    return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resolve(data.results);
      })
    })
  };

  async function obtenerInfoPkmn(urlpkmn){
    return new Promise((resolve, reject) => {
      fetch(urlpkmn)
        .then((response) => response.json() )
        .then((data) => {
          resolve(data);
        })
    })
  };

  const infoPkmns = async data => {
    let infoPokemons = await Promise.all(
      data.map(async pkmn =>{
        let datosPkmn = await obtenerInfoPkmn(pkmn.url);
        return datosPkmn
      })
    );
    setPkmns(infoPokemons);
  };


  useEffect(() =>{
    async function obtenerPkmns(){
      let url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
      let response = await obtenerPokemons(url);
      /* console.log('r1',response); */
      let response2 = await infoPkmns(response);

    }
    obtenerPkmns();   
  }, []);

  const filteredPokemons = pkmns.filter(pkmn => {
    return pkmn.name.toLowerCase().includes(searchfield.toLowerCase());
  })


  return (
    <div>
      <div className="navbar">
        <NavigationBar />
      </div>
      <div className="App">
            <PortraitImg/>
      <div className='search'>
            <div className="searchIcon">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search pkmn name..."
              className="inputbase"
              inputProps={{ 'aria-label': 'search' }}
              onChange={event => setSearchField(event.target.value)}
            />
          </div>
            {!pkmns ? <h1 className="orangered">Loading Pokémons...</h1> : (
              <div style={{padding: 20}}>
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing= {2}
                >
                    {filteredPokemons.map((Pkmn)=>(
                        <Grid item >
                            <HeroCard Pkmn={Pkmn}/>
                        </Grid>
                    ))}
                </Grid>
              </div>
            )}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
