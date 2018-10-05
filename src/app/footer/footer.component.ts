import { Component, OnInit } from '@angular/core';
import { FooterLink } from './footerLink';
import { FOOTERLINKS } from './data-footerLinks';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerLinks = FOOTERLINKS;

  constructor() { }

  ngOnInit() {
  }

}
