import { Component, OnInit } from '@angular/core';

import { FooterLink } from './footerLink';
import { FooterLinksService } from '../footer-links.service';

@Component({
  selector: 'app-footer-links',
  templateUrl: './footer-links.component.html',
  styleUrls: ['./footer-links.component.scss']
})
export class FooterLinksComponent implements OnInit {

  constructor(private footerLinksService: FooterLinksService) { }

  footerLinks: FooterLink[];

  ngOnInit() {
    this.fetchFooterLinks();
  }

  fetchFooterLinks() {
    this.footerLinksService
      .getFooterLinks()
      .subscribe((data: FooterLink[]) => {
        this.footerLinks = data;
        console.log('Data requested ... ');
        console.log(this.footerLinks);
      });
  }
}
