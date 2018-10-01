import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListFeatureComponent } from './shopping-list-feature/shopping-list-feature.component';
import { RecipeBookFeatureComponent } from './recipe-book-feature/recipe-book-feature.component';
import { ShopingListEditComponent } from './shopping-list-feature/shoping-list-edit/shoping-list-edit.component';
import { RecepieListViewComponent } from './recipe-book-feature/recepie-list-view/recepie-list-view.component';
import { RecepieItemViewComponent } from './recipe-book-feature/recepie-list-view/recepie-item-view/recepie-item-view.component';
import { RecepieDetailViewComponent } from './recipe-book-feature/recepie-detail-view/recepie-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListFeatureComponent,
    RecipeBookFeatureComponent,
    ShopingListEditComponent,
    RecepieListViewComponent,
    RecepieItemViewComponent,
    RecepieDetailViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
