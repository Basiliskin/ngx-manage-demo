import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';

import {BaseValueType,BaseDictionary, TemplateService} from 'ngx-manage';

import { Input } from '@angular/core';



function BaseViewChild(name:string)
{
  return ViewChild(name,{ static: true });
}

@Component({
  selector: 'app-base-template',
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.css']
})
export class BaseTemplateComponent implements OnInit {
  @BaseViewChild('errorTemplate') errorTemplate: TemplateRef<any>; 
  @BaseViewChild('baseTemplate') baseTemplate: TemplateRef<any>; 
  @BaseViewChild('baseArray') baseArray: TemplateRef<any>; 
  @BaseViewChild('booleanTemplate') booleanTemplate: TemplateRef<any>; 
  @BaseViewChild('dateTemplate') dateTemplate: TemplateRef<any>; 
  @BaseViewChild('timeTemplate') timeTemplate: TemplateRef<any>; 
  @BaseViewChild('numberTemplate') numberTemplate: TemplateRef<any>; 
  @BaseViewChild('objectTemplate') objectTemplate: TemplateRef<any>; 
  @BaseViewChild('colorTemplate') colorTemplate: TemplateRef<any>; 
  @BaseViewChild('autocompleteTemplate') autocompleteTemplate: TemplateRef<any>; 
  @BaseViewChild('descriptionTemplate') descriptionTemplate: TemplateRef<any>; 
  
  

  _shema: string;
  get Shema(): string {
      return this._shema;
  }
  @Input('shema')
  set Shema(value: string) {
      this._shema = value;
      this.template.load(this.dictionary,this._shema);
  }

  dictionary:BaseDictionary = {};
  constructor(private template:TemplateService) 
  {
   
  }

  ngOnInit() 
  {
    this.dictionary[BaseValueType.Array] = this.baseArray;
    this.dictionary[BaseValueType.Text] = this.baseTemplate;
    this.dictionary[BaseValueType.Boolean] = this.booleanTemplate;
    this.dictionary[BaseValueType.Date] = this.dateTemplate;
    this.dictionary[BaseValueType.Time] = this.timeTemplate;
    this.dictionary[BaseValueType.Number] = this.numberTemplate;
    this.dictionary[BaseValueType.Object] = this.objectTemplate;
    
    this.dictionary['color'] = this.colorTemplate;
    this.dictionary['autocomplete'] = this.autocompleteTemplate;
    this.dictionary['description'] = this.descriptionTemplate;
    

    this.dictionary[BaseValueType.Error] = this.errorTemplate;
    //console.log(this.dictionary);
    this.template.load(this.dictionary,this._shema);
  }

}
