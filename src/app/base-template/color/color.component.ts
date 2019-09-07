import { Component, OnInit } from '@angular/core';
import {TemplateBaseComponent} from 'ngx-manage';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent extends TemplateBaseComponent  implements OnInit {
  constructor() 
  {
    super();
  }

}
