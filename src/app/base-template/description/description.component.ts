import { Component, OnInit } from '@angular/core';
import {TemplateBaseComponent} from 'ngx-manage';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})

export class DescriptionComponent   extends TemplateBaseComponent  implements OnInit {
  constructor() {
    super();
  }

}
