import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateComponent } from './components/annonce/create/create.component';
import { ListComponent } from './components/annonce/list/list.component';
import { PricipalComponent } from './components/pricipal/pricipal.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidatureDetailsComponent } from './components/annonce/candidature-details/candidature-details.component';
import { EditComponent } from './components/annonce/create/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateComponent,
    ListComponent,
    EditComponent,
    PricipalComponent,
    CandidatureDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
