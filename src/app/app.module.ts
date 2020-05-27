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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import {AdminOtherComponent} from './admin/components/admin-other/admin-other.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { DiscordCallbackComponent } from './callbacks/user/discord-callback/discord-callback.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { PatreonCallbackComponent } from './callbacks/user/patreon-callback/patreon-callback.component';
import {CookieService} from "ngx-cookie-service";
import { MinecraftComponent } from './dashboard/minecraft/minecraft.component';
import { ErrorComponent } from './error/error.component';
import { LicensesComponent } from './licenses/licenses.component';
import { DiscordRoleComponent } from './admin/components/discord-role/discord-role.component';
import { AgreementComponent } from './admin/agreement/agreement.component';
import { TwitchCallbackComponent } from './callbacks/user/twitch-callback/twitch-callback.component';
import {ServicesAdminComponent} from "./admin/components/services-admin/services-admin.component";
import {MatExpansionModule} from "@angular/material/expansion";
import { DiscordServerComponent } from './admin/components/discord-server/discord-server.component';
import { DiscordServersComponent } from './admin/components/discord-servers/discord-servers.component';
import { GameServersComponent } from './admin/components/game-servers/game-servers.component';
import { GameServerComponent } from './admin/components/game-server/game-server.component';
import { TwitchCallbackAdminComponent } from './callbacks/admin/twitch-callback-admin/twitch-callback-admin.component';
import { PatreonCallbackAdminComponent } from './callbacks/admin/patreon-callback-admin/patreon-callback-admin.component';
import { MixerCallbackAdminComponent } from './callbacks/admin/mixer-callback-admin/mixer-callback-admin.component';
import {JwtInterceptorService} from "./services/JwtInterceptor/jwt-interceptor.service";
import {ErrorInterceptorService} from "./services/Error-Interceptor/error-interceptor.service";


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
    AdminOtherComponent,
    DiscordCallbackComponent,
    PatreonCallbackComponent,
    MinecraftComponent,
    ErrorComponent,
    LicensesComponent,
    DiscordRoleComponent,
    AgreementComponent,
    TwitchCallbackComponent,
    ServicesAdminComponent,
    DiscordServerComponent,
    DiscordServersComponent,
    GameServersComponent,
    GameServerComponent,
    TwitchCallbackAdminComponent,
    PatreonCallbackAdminComponent,
    MixerCallbackAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCardModule,
    ScrollingModule,
    MatExpansionModule
  ],
  providers: [CookieService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
