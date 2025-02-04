import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pase',
  templateUrl: './basics-pase.component.html',
  styleUrl: './basics-pase.component.css',
  standalone: false
})
export class BasicsPaseComponent {

  public nameLower : string = 'william';
  public nameUpper : string = 'WILLIAM';
  public fullName : string = 'WiLlIAm NeFFerSoN';

  public customDate :Date = new Date();

}
