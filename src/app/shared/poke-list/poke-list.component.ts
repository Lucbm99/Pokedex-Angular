import { Component, OnInit } from '@angular/core';
import { PokeApiService } from './../../services/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any; 
  public getAllPokemons: any; 

  public apiError: boolean = false

  constructor(
    private _pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this._pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error => {
        this.apiError = true;
      }
    )
  }

  public searchPokemon(value: string) {
    const filter = this.setAllPokemons.filter(
      (res: any) => { 
        return !res.name.indexOf(value.toLowerCase());
    });
    
    this.getAllPokemons = filter
  }
}
