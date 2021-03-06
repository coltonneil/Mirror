import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FooterLinksService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getFooterLinks() {
    return this.http.get(`${this.uri}/footerLinks`);
  }
}
