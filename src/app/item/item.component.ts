import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() character: any;
  //@Output() sideClicked = new EventEmitter<{name: string, side: string}>();
  swService: StarWarsService

  constructor(swService: StarWarsService){
    this.swService = swService
  }

  onSideClick(side: string){
    //this.sideClicked.emit({name: this.character.name, side})
    this.swService.onSideChoosen({name: this.character.name, side})
  }
}
