import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LogService } from './log.service';
import { HttpClient, HttpResponse } from '@angular/common/http'

@Injectable()
export class StarWarsService {
  private characters = [
    {name: "Luke", side: ""},
    {name: "Vader", side: ""}
  ];
  private logService: LogService
  charactersChanged = new Subject<void>()
  http: HttpClient
  URL = 'https://pokeapi.co/api/v2/pokemon'

  constructor(logService: LogService, http: HttpClient) {
    this.logService = logService
    this.http = http
   }

  fetchCharacters(){
    this.http.get(this.URL).subscribe(
      (response: any) => {
        console.log(response)
        const data = response.results.map((char: any) => {
          return {name: char.name, side: ''}
        })
        this.characters = data;
        this.charactersChanged.next();
      }
    )
  }

  getCharacters(chosenList: string){
    if(chosenList === 'all'){
      return this.characters.slice()
    }
    return this.characters.filter((char) => {
      return char.side === chosenList
    })
  }

  onSideChoosen(charInfo: any){
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name
    })
    this.characters[pos].side = charInfo.side
    this.charactersChanged.next();
    this.logService.writeLog('Changed side of ' + charInfo.name + ', new side: ' + charInfo.side);
  }

  addCharacter(char: any){
    const nameConflict = this.characters.find((character) => {
      return char.name === character.name;
    })
    if (nameConflict) {
      return;
    }
    this.characters.push(char)
  }
}
