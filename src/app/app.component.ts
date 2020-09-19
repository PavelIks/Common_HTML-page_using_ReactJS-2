import { Component } from "@angular/core";
@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent
{
  title = "CodeSandbox";
  name: string = "Капитан Колбасов Сасисовичь";
  cost: number = 11;
  ready: number = 0.7;
  phoneNumbers: string[] =
  [
    "Домашний телефон: +380148296285",
    "Контактный телефон: +380106284597"
  ];
  condition: boolean = new Date().getHours() >= 10 && new Date().getHours() <= 17; // С 10 до 17 часов будет торчать надпись "Здарова!"
  
  //
  countTEST: number = 7;
  //
}