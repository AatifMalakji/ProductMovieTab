import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  selectedskill : string = 'html'
skillsarr = [{
  name: 'html',
  content: '<strong> HTML </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quam nostrum, nihil voluptas magnam fuga ducimus dolore, voluptatem fugiat sed cumque laborum impedit est optio!'
},
{
  name: 'css',
  content: '<strong> CSS </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quam nostrum, nihil voluptas magnam fuga ducimus dolore, voluptatem fugiat sed cumque laborum impedit est optio!'
},
{
  name: 'js',
  content: '<strong> JS </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quam nostrum, nihil voluptas magnam fuga ducimus dolore, voluptatem fugiat sed cumque laborum impedit est optio!'
},
{
  name: 'angular',
  content: '<strong> Angular </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quam nostrum, nihil voluptas magnam fuga ducimus dolore, voluptatem fugiat sed cumque laborum impedit est optio!'
}]
  constructor() { }

  ngOnInit(): void {
  }

}
