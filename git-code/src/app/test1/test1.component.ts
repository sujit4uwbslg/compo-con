import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'test1',
  templateUrl: './test1.component.html',
})
export class Tes1Component {
@Input() param:string="";
@Output() childEvent=new EventEmitter();
}
