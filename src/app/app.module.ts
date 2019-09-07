import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxManageModule } from 'ngx-manage';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BaseTemplateComponent } from './base-template/base-template.component';
import { TextComponent } from './base-template/text/text.component';
import { BooleanComponent } from './base-template/boolean/boolean.component';
import { DateComponent } from './base-template/date/date.component';
import { TimeComponent } from './base-template/time/time.component';
import { NumberComponent } from './base-template/number/number.component';
import { AutocompleteComponent } from './base-template/autocomplete/autocomplete.component';
import { ArrayComponent } from './base-template/array/array.component';
import { ColorComponent } from './base-template/color/color.component';
import { DescriptionComponent } from './base-template/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BaseTemplateComponent,
    TextComponent,
    BooleanComponent,
    DateComponent,
    TimeComponent,
    NumberComponent,
    AutocompleteComponent,
    ArrayComponent,
    ColorComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxManageModule,
    RouterModule.forRoot(
      [
        {
          path:'main',
          component:AppComponent
          
        },
        {
          path:'',
          redirectTo:'/main',
          pathMatch:'full'
          
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
