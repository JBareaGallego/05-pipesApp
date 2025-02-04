import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name :string[] = ['Fernando','Melisa','Alex'];
  public gender: string[] = ['male','female','other'];
  public invitationMap = {
    'male':'invitarlo',
    'female':'invitarla',
    'other':'invitarle'
  }
  public i:number = 0;

  public changePerson(){
    this.i++;
    if(this.i>2) this.i = 0;
  }

  //i18n Plural
  public clients: string[] = ['Maria','Pedro','Melisa','Tom','Miguel','Joe','William','Caroline']
  public clientsMap = {
    '=0':'there are no clients waiting',
    '=1':'there is one client waiting',
    'other':'there are # clients waiting'

  }

  deleteClient():void {
    this.clients.pop();
    }

    //Slice
    public names: string[] = ['Maria','Pedro','Melisa','Tom','Miguel','Joe','William','Caroline']

    //KeyValue Pipe
    public person = {
      name:'Marche',
      age:29,
      address: 'Faro, Portugal'
    }

    //Async Pipe
    public myObservableTimer = interval(2000).pipe(
      tap(value => console.log('tap: ',value) )
    );

    public promiseValue:Promise<string> = new Promise((resolve,reject) => {

      setTimeout( ()=> {
        resolve('There is data in the promise');
      }
      ,3500);

    }
  )
}
