import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {
  sides = [
    {display: 'None', value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark', value: 'dark'}
  ]
  defaultName = 'Obi'
  swService: StarWarsService

  constructor(swService: StarWarsService){
    this.swService = swService
  }

  onSubmit(form: any){
    console.log(form)
    this.swService.addCharacter(form.value)
  }

}
