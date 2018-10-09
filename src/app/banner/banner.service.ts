import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Banner } from './banner';
import { BANNER } from './data-banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  getBanner(): Observable<Banner> {
    return of(BANNER);
  }
  constructor() { }
}
