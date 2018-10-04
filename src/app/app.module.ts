import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { LogoComponent } from './logo/logo.component';
import { SearchIconComponent } from './search-icon/search-icon.component';
import { AccountIconComponent } from './account-icon/account-icon.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { HeaderIconsComponent } from './header-icons/header-icons.component';
import { CategoriesComponent } from './categories/categories.component';

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
    CategoriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
