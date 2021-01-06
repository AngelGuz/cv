import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  onClick(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id.nodeValue;
    switch(idAttr){
      case 'homeView':
        document.getElementById('home')?.scrollIntoView({behavior:'smooth'});
        break;
      case 'aboutView':
        document.getElementById('about')?.scrollIntoView({behavior:'smooth'});
        break;
      case 'serviceView': 
        document.getElementById('service')?.scrollIntoView({behavior:'smooth'});
        break;
      case 'contactView':
        document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});
        break;
    }
  }
}
