import { Injectable } from '@angular/core';
import { BattlePokedex } from '../assets/pokedex.js';
import { Natures } from '../assets/nature.js';
import { Characteristics } from '../assets/characteristic.js';
import { Pokemon } from './types/Pokemon';
import { Nature } from './types/Nature';
import { Characteristic } from './types/Characteristic';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  allBaseSpecies: Array<Pokemon>;

  getAllBaseSpecies() : Array<Pokemon> {
    if(!this.allBaseSpecies){
      this.allBaseSpecies = Object.keys(BattlePokedex).reduce((accum, pkmn) => {
        let dexEntry : Pokemon = BattlePokedex[pkmn];
        // Fitler out Smogon CAP, Reduce to 1 per species, and exlude any Forms, etc.
        if(dexEntry.num > 0 && accum.indexOf(dexEntry.species) < 0 && !dexEntry.baseSpecies){
          accum.push(dexEntry);
        }
        return accum;
      }, []);
    }
    return this.allBaseSpecies;
  }

  getAllNatures() : Array<Nature> {
    return Natures.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
  }

  getAllCharacteristics() : Array<Characteristic> {
    return Characteristics.sort((a,b) => {
      return a.name > b.name ? 1 : -1;
    })
  }
}
