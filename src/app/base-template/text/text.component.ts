import { Component, OnInit } from '@angular/core';
import {TemplateBaseComponent} from 'ngx-manage';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent extends TemplateBaseComponent  implements OnInit 
{
  constructor() {
    super();
  }
}
