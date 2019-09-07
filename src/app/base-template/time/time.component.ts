import { Component, OnInit } from '@angular/core';
import {TemplateBaseComponent} from 'ngx-manage';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent  extends TemplateBaseComponent  implements OnInit 
{
  constructor() {
    super();
  }
  onChangeHour(value)
  {
    this.Value.value = {
      hours   : value,
      minutes : this.Value.value.minutes
    };
  }
  onChangeMinute(value)
  {
    this.Value.value = {
      hours   : this.Value.value.hour,
      minutes : value
    };
  }
}
