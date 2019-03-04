import { Abilities } from './Abilities';
import { Stats } from './Stats';

export class Pokemon {
  key?: String
  num : Number;
  species: String;
  baseSpecies?: String;
  forme?: String
  types: Array<String>;
  abilities: Abilities;
  baseStats: Stats;
  heightm: Number;
  weightkg: Number;
  color: String;
  eggGroups: Array<String>;
  evos?: Array<String>;
  prevo?: String;
  evoLevel?: number;
  evoType?: String;
  evoItem?: String
}
