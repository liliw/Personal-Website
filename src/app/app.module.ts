import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatListModule, MatGridListModule } from '@angular/material';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkillComponent } from './skill/skill.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillComponent,
    IntroComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
