import { Component, OnInit } from '@angular/core';
import {TemplateBaseComponent} from 'ngx-manage';


export type KeyValuePair = { [id: string] : number; };
//https://picturepan2.github.io/spectre/elements/forms.html
@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent   extends TemplateBaseComponent  implements OnInit {
  keys : Array<any> = [];
  Selected : number = undefined;
  constructor() 
  {
    super();
  }
  ngOnInit()
  {
    const list = this.Value.value; 
    if(list.length)
    {
      const k = this.Value.param.provider.split(',');
      for(let i=0;i<list.length;i++)
      {
        let id = [];
        for(let j=0;j<k.length;j++)
        {
          id.push(list[i][k[j]]);
        }
        this.keys.push({
          name  : id.join(':'),
          index : i
        });

        if(this.Selected===undefined)
        {
          this.Selected = i;
        }
      }
    }
    //console.log('ArrayComponent',this.Owner);
  }
  title(i)
  {
    const k = this.Value.param.provider.split(',');
    const list = this.Value.value; 
    let id = [];
    for(let j=0;j<k.length;j++)
    {
      id.push(list[i][k[j]]);
    }
    return id.join(':');
  }
}
