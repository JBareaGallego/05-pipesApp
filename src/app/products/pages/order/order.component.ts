import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  public isUpperCase : boolean = false;

  public heroes: Hero [] = [
    {name:'Superman',canFly:true,color:Color.blue},
    {name:'Batman',canFly:false,color:Color.black},
    {name:'Spiderman',canFly:false,color:Color.red},
    {name:'Robin',canFly:false,color:Color.green},
    {name:'Green Lantern',canFly:true,color:Color.green},
    {name:'Hulk ',canFly:false,color:Color.green},
  ]

  public sortingMethod : keyof Hero | '' = '';

  toggleUppercase():void {
    this.isUpperCase = !this.isUpperCase;
  }
}
