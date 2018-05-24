import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage implements OnInit {

  public items;
  ngOnInit() {
    this.items = Array.from({length: 50}, (x, i) => i + '');

  }
}
