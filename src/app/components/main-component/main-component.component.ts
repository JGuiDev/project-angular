import { Component } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent{
    user = {
      name: "João Guilherme da Silva Sousa",
      age: 18,
      school: "EEEP Joaquim Nogueira"
    }
}
