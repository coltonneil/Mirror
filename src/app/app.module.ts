import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { LogoComponent } from './logo/logo.component';
import { SearchIconComponent } from './search-icon/search-icon.component';
import { AccountIconComponent } from './account-icon/account-icon.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { HeaderIconsComponent } from './header-icons/header-icons.component';
import { CategoryLinkComponent } from './category-link/category-link.component';
import { FooterComponent } from './footer/footer.component';
import { FooterIconsComponent } from './footer-icons/footer-icons.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuIconComponent,
    LogoComponent,
    SearchIconComponent,
    AccountIconComponent,
    CartIconComponent,
    MobileHeaderComponent,
    HeaderIconsComponent,
    CategoryLinkComponent,
    FooterComponent,
    FooterIconsComponent,
    ContentComponent,
    HomeComponent,
    CategoryPageComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularSvgIconModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
