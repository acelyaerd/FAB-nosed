import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuToLoginComponent } from './menu-to-login/menu-to-login.component';
import { MenuToLogoutComponent } from './menu-to-logout/menu-to-logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JournalComponent } from './journal/journal.component';
import { NetworkComponent } from './network/network.component';
import { ExploreComponent } from './explore/explore.component';
import { ProfileReviewComponent } from './profile-review/profile-review.component';
import { ContactComponent } from './contact/contact.component';
import { ContactProfileReviewComponent } from './contact-profile-review/contact-profile-review.component';
import { MyProfileReviewComponent } from './my-profile-review/my-profile-review.component';
import { NotificationComponent } from './notification/notification.component';
import { ChatComponent } from './chat/chat.component';
import { ZoomComponent } from './zoom/zoom.component';
import { HorizontalListComponent } from './horizontal-list/horizontal-list.component';
import { DayService, MonthAgendaService, MonthService, RecurrenceEditorModule, ScheduleModule, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuToLoginComponent,
    MenuToLogoutComponent,
    DashboardComponent,
    JournalComponent,
    NetworkComponent,
    ExploreComponent,
    ProfileReviewComponent,
    ContactComponent,
    ContactProfileReviewComponent,
    MyProfileReviewComponent,
    NotificationComponent,
    ChatComponent,
    ZoomComponent,
    HorizontalListComponent,
    FooterComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule, RecurrenceEditorModule,
    MatListModule, MatIconModule, MatBadgeModule, MatCardModule, MatInputModule, MatButtonModule, BrowserAnimationsModule
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
