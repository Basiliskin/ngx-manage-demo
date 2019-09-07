import { Component } from '@angular/core';

import { Time } from '@angular/common';

import {BaseDictionary,Descriptor,BaseValueProp,BaseValueType,BaseParam,BaseDescriptors} from 'ngx-manage';

@Descriptor([
  new BaseParam(BaseValueType.Undefined,'$base',BaseValueProp.Disabled),
  new BaseParam(BaseValueType.Undefined,'$user',BaseValueProp.Input)
],[
  'id','name','description','makat','color','test','date','time','sum','parent','value'
])
class CustomValue 
{
  @BaseDescriptors([
    new BaseParam(BaseValueType.Text,undefined,BaseValueProp.Disabled,'color'),
    new BaseParam(BaseValueType.Custom,'$user',BaseValueProp.Input,'color')
  ])
  public color:string = 'red';

  @BaseDescriptors([
    new BaseParam(BaseValueType.Custom,undefined,BaseValueProp.Disabled,'autocomplete','makat'),
    new BaseParam(BaseValueType.Custom,'$user',BaseValueProp.Input,'autocomplete','makat')
  ])
  public makat:string = undefined;

  @BaseDescriptors([
      new BaseParam(BaseValueType.Text),
      new BaseParam(BaseValueType.Text,'$user',BaseValueProp.Input)
  ])
  public name:string = '';

  @BaseDescriptors([
    new BaseParam(BaseValueType.Boolean)
  ])
  public test:boolean = false;

  @BaseDescriptors([
    new BaseParam(BaseValueType.Custom,undefined,BaseValueProp.Disabled,'array','id,name'),
    new BaseParam(BaseValueType.Custom,'$user',BaseValueProp.Input,'array','id,name')
  ])
  public value:any = [];

  @BaseDescriptors([
    new BaseParam(BaseValueType.Date)
  ])
  public date:Date = new Date();

  public time:Time = { hours: 0,minutes: 1 };
  public sum:number = 0.0;
  public id:number = 0;

  @BaseDescriptors([
    new BaseParam(BaseValueType.Object),
    new BaseParam(BaseValueType.Object,'$user',BaseValueProp.Disabled)
  ])
  public parent:CustomValue = undefined;

  @BaseDescriptors([
    new BaseParam(BaseValueType.Custom,undefined,BaseValueProp.Disabled,'description'),
    new BaseParam(BaseValueType.Custom,'$user',BaseValueProp.Input,'description')
  ])
  public description:string = '';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test App';
  shema = '$base';
  value : CustomValue  = new CustomValue();
  dictionary:BaseDictionary;

  
  constructor()
  {
    this.value.parent = new CustomValue();
    this.value.value = [new CustomValue(),new CustomValue()];
  }
  dictionaryLoaded(dictionary:BaseDictionary)
  {
    this.dictionary = dictionary;
  }
  changeShema(name:string)
  {
    //console.log('this.value',{...this.value});
    this.shema = name;
  }
}
