import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ContactProfileReviewComponent } from './contact-profile-review/contact-profile-review.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { JournalComponent } from './journal/journal.component';
import { LoginComponent } from './login/login.component';
import { MyProfileReviewComponent } from './my-profile-review/my-profile-review.component';
import { NetworkComponent } from './network/network.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileReviewComponent } from './profile-review/profile-review.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ZoomComponent } from './zoom/zoom.component';

const routes: Routes = [
  {'path': '', component: HomeComponent},
  {'path': 'login', component: LoginComponent},
  {'path': 'zoom', component: ZoomComponent},
  {'path': 'chat', component: ChatComponent},
  {'path': 'notification', component: NotificationComponent},
  {'path': 'myprofilereview', component: MyProfileReviewComponent},
  {'path': 'contactprofilereview', component: ContactProfileReviewComponent},
  {'path': 'profilereview', component: ProfileReviewComponent},
  {'path': 'contact', component: ContactComponent},
  {'path': 'explore', component: ExploreComponent},
  {'path': 'network', component: NetworkComponent},
  {'path': 'journal', component: JournalComponent},
  {'path': 'dashboard', component: DashboardComponent},
  {'path': 'signup', component: SignUpComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
