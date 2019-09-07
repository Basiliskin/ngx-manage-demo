import { Component, OnInit } from '@angular/core';
import {TemplateBaseComponent} from 'ngx-manage';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent extends TemplateBaseComponent  implements OnInit 
{
  constructor() {
    super();
  }

}
