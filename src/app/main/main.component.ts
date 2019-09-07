import { Component, OnInit } from '@angular/core';

class MenuData {
  constructor(
    public id:number,
    public title:string,
    public path:string

  ){}
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  Menu :MenuData[] = [
    new MenuData(1,'Person','/persons'),
    new MenuData(2,'Car','/cars'),
    new MenuData(3,'Persons Car','/connection')
  ];
  constructor() { }

  ngOnInit() {
  }


}
