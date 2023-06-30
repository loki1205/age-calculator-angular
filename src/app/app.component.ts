import { Component } from '@angular/core';
import { ButtonThemeColor } from '@progress/kendo-angular-buttons';
import { FormatSettings } from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value!:Date;
  public format: FormatSettings = {
    displayFormat: "dd/MM/yyyy",
    inputFormat: "dd/MM/yyyy",
  };
  age!: number;
  color:ButtonThemeColor="primary"
  handleInput(){
    const dob = new Date(this.value);
    const timeDiff = Math.abs(Date.now() - dob.getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  }
}
