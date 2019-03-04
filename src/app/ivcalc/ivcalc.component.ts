import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../types/Pokemon';

@Component({
  selector: 'app-ivcalc',
  templateUrl: './ivcalc.component.html',
  styleUrls: ['./ivcalc.component.css']
})
export class IvcalcComponent implements OnInit {

  constructor(public pokemonService : PokemonService) {}

  levels : Array<Number>;

  ngOnInit() {
    this.levels = Array.from(new Array(100).keys());
  }

}
