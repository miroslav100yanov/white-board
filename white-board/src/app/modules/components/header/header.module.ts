import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { HeaderComponent } from './header.component';
import { HeaderBackNavigatorComponent } from './header-back-navigator/header-back-navigator.component';
import { HeaderTitleComponent } from './header-title/header-title.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderBackNavigatorComponent,
    HeaderTitleComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [
    HeaderComponent,
    HeaderBackNavigatorComponent,
    HeaderTitleComponent
  ]
})
export class HeaderModule { }
