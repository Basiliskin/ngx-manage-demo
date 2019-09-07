import { Component, OnInit } from '@angular/core';

import {BaseValueProp,TemplateBaseComponent} from 'ngx-manage';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent  extends TemplateBaseComponent  implements OnInit {
  lastkeydown1: number = 0;
  List:Array<any>=[];
  searchText:string;
  selectValue:any;
  disabled:Boolean;
  ListID:string = 'dynmicUser_' + Math.floor(Math.random() * 1000 + 10000);
 
  userData =[{
    id:0,
    value:'private'
  },{
    id:1,
    value:'userService'
  },{
    id:2,
    value:'UserService 1'
  },{
    id:20,
    value:'UserService 2'
  },{
    id:21,
    value:'UserService 3'
  },{
    id:22,
    value:'UserService 5'
  }];

  //*********/
  quickSearch:string;
  quickSearchDiv:boolean;
  selectItem:number;

  constructor(/*private userService: UserService*/) {
    super();
    /*
    this.userService.getUserList().subscribe(
      data => {
        Object.assign(this.userData, data);
      },
      error => {
        console.log("Something wrong here");
      });    
    */
  }  
  ngOnInit()
  {
    this.selectValue = this.userData.find((e)=>e.id===this.Value.value);
    if(this.selectValue)
    {
      this.searchText = this.selectValue.value;
    }
    this.disabled = this.Value.prop != BaseValueProp.Input;
    //console.log('ngOnInit',this.Value);
  }
  getList($event) {
    const search = this.searchText;
    this.List = [];
    if(!this.selectValue || this.selectValue.value!==search)
    {
      if (search.length > 2) {
        if ($event.timeStamp - this.lastkeydown1 > 200) 
        {        
          this.List = this.searchFromArray(this.userData, search);
          this.lastkeydown1 = $event.timeStamp;
        }
      }   
    }
  }  
  onInputChanged(value)
  {
    this.selectValue = this.userData.find((e)=>e.value===value);
    this.Value.value = this.selectValue ? this.selectValue.id : undefined;
  }
  searchFromArray(arr, regex,len = 5) {
    let matches = [], i;
    for (i = 0;matches.length<len && i < arr.length; i++) {
      if (arr[i].value.match(regex)) {
        matches.push(arr[i]);
      }
    }
    return matches;
  };

  autocomplete(e,keydown)
  {
    if(keydown)
    {
      if (e.keyCode == 13) 
      { // on select
        e.preventDefault();
        if(this.selectItem)
        {
          this.dispSelection(this.selectItem);
        }
      }
      else if (e.keyCode == 38) 
      { // up
        if(this.selectItem)
        {
          var i = this.List.findIndex((e)=>e==this.selectItem);
          if(i)
          {
            this.selectItem = this.List[i-1];
          }
        }
      }
      else if (e.keyCode == 40) 
      { // down
        var i = this.selectItem ? this.List.findIndex((e)=>e==this.selectItem) : -1;
        if((!this.selectItem && i+1<this.List.length) || (this.selectItem && i>-1 && i+1<this.List.length))
        {
          this.selectItem = this.List[i+1];
        }
      }
    }
    else
    {
      if (e.keyCode == 40 || e.keyCode == 38 || e.keyCode == 13) {
        e.preventDefault();
        return;
      }
      this.quickSearch = "";
      var regex = new RegExp(this.searchText, "i");
      this.List = this.searchFromArray(this.userData, regex);
      this.quickSearchDiv = this.List.length>0;
    }
  }
  focusout(e)
  {
    this.quickSearchDiv = false;
    if(this.selectItem)
    {
      this.dispSelection(this.selectItem);
    }
  }
  dispSelection(item)
  {
    this.quickSearchDiv = false;
    this.selectValue = item;
    this.searchText = item.value;
    this.Value.value = this.selectValue ? this.selectValue.id : undefined;
  }
}
