import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  standalone: false,
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];


  ngOnInit(): void {
    this.menuItems = [
      {label:'Angular Pipes', icon: 'pi pi-fw pi-desktop',
        items:[
          {label:'Text and Dates', icon: 'pi pi-align-left', routerLink: '/'},
          {label:'Number', icon: 'pi pi-dollar', routerLink: '/numbers'},
          {label:'Uncommon', icon: 'pi pi-globe', routerLink: '/uncommon'},
      ]},
      {label:'Other Pipes', icon: 'pi pi-cog',
        items:[
          {label:'Custom Pipes', icon: 'pi pi-cog', routerLink: '/custom'}
        ]
      },

    ]
  }

}
