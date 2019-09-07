import { Component, OnInit } from '@angular/core';
import {TemplateBaseComponent} from 'ngx-manage';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent  extends TemplateBaseComponent  implements OnInit {
  constructor() 
  {
    super();
  }

}
