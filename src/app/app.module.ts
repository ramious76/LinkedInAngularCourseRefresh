import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// code components
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { MediaItemComponent } from './media-item/media-item.component';

// code services
import { CategoryListPipe } from './services/category-list.pipe';
import { FavoriteDirective } from './services/favorite.directive';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemListComponent,
    MediaItemFormComponent,
    CategoryListPipe,
    FavoriteDirective,
    MediaItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
