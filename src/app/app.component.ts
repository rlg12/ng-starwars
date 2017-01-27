import {Component, OnInit} from '@angular/core';
import {SwapiService} from "./swapi.service";


@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  people = [];
  constructor(private swapiService:SwapiService){

  }

  ngOnInit() {
    this.swapiService.getPeopleList().subscribe((response) => this.people = response);
    /*let observable:Observable<any> = this.http
      .get(PEOPLE_API_URL);*/


    console.log()


  }
  title = 'app works!';


}
