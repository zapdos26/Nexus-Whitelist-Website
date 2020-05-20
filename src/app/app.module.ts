import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {ServiceStatusComponent} from './components/service-status/service-status.component';
import {AdminComponent} from './admin/admin.component';
import {LoggedinStatusComponent} from './components/loggedin-status/loggedin-status.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MinecraftServerComponent} from './components/minecraft-server/minecraft-server.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule
} from '@angular/material';
import {DiscordServerComponent} from './components/discord-server/discord-server.component';
import {AdminOtherComponent} from './components/admin-other/admin-other.component';
import {BannedScrollComponent} from './components/banned-scroll/banned-scroll.component';
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ServiceStatusComponent,
    AdminComponent,
    LoggedinStatusComponent,
    SidebarComponent,
    MinecraftServerComponent,
    DiscordServerComponent,
    AdminOtherComponent,
    BannedScrollComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCardModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
