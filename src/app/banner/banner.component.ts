import { Component, OnInit } from '@angular/core';
import { Banner } from './banner';
import { BannerService } from './banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banner: Banner;

  constructor(private bannerService: BannerService) { }

  ngOnInit() {
    this.getBanner();
  }

  getBanner(): void {
    this.bannerService.getBanner()
      .subscribe(banner => this.banner = banner);
  }
}
