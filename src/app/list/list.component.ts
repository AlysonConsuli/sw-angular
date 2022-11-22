import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() characters: any
  logService: LogService

  constructor(logService: LogService){
    this.logService = logService
  }

  getConsole(){
    this.logService.WriteLog(this.characters)
  }

}
