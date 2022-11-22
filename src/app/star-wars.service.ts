import { Injectable } from '@angular/core';

@Injectable()
export class StarWarsService {
  characters = [
    {name: "Luke", side: ""},
    {name: "Vader", side: ""}
  ];

  constructor() { }

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
  }
}
