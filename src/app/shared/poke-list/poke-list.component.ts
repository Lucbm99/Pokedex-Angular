import { Component, OnInit } from '@angular/core';
import { PokeApiService } from './../../services/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any; 

  constructor(
    private _pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this._pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.getAllPokemons = res.results;
      }
    )
  }

}
