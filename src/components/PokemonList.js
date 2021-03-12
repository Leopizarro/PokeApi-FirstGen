import React from 'react';
import HeroCard from './HeroCard'
import Grid from '@material-ui/core/Grid';
import './PokemonList.css'

const PokemonList= () => {
    let Arraypkmn = [1,2,3,4,5,6,7,8,9,0];
    return(
        <div className="container">
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing= {5}
            >
                {Arraypkmn.map((Pkmn)=>(
                    <Grid item>
                        <HeroCard/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default PokemonList;