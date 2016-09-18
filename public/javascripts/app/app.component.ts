import { Component, OnInit } from '@angular/core';
import { TitleService } from './title.service';

@Component({
  selector: 'my-app',
  template: '<h1 *ngIf="title">My first {{title}} app is up and running</h1>',
  providers: [TitleService]
})

export class AppComponent implements OnInit{
  private title: string;

  constructor (private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.getTitle().then(title => this.title = title[0].text);
  }
}
