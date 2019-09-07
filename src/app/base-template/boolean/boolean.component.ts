import { Component, OnInit } from '@angular/core';
import {TemplateBaseComponent} from 'ngx-manage';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.css']
})
export class BooleanComponent  extends TemplateBaseComponent  implements OnInit {
    constructor() 
    {
      super();
    }
  }
  
