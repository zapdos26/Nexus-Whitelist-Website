import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminComponent} from './admin/admin.component';
import {DiscordCallbackComponent} from "./callbacks/user/discord-callback/discord-callback.component";
import {PatreonCallbackComponent} from "./callbacks/user/patreon-callback/patreon-callback.component";
import {MinecraftComponent} from "./dashboard/minecraft/minecraft.component";
import {ErrorComponent} from "./error/error.component";
import {AuthGuard} from "./_helpers/auth.guard";
import {AgreementComponent} from "./admin/agreement/agreement.component";
import {TwitchCallbackComponent} from "./callbacks/user/twitch-callback/twitch-callback.component";
import {TwitchCallbackAdminComponent} from "./callbacks/admin/twitch-callback-admin/twitch-callback-admin.component";
import {PatreonCallbackAdminComponent} from "./callbacks/admin/patreon-callback-admin/patreon-callback-admin.component";
import {MixerCallbackAdminComponent} from "./callbacks/admin/mixer-callback-admin/mixer-callback-admin.component";
import {MixerCallbackComponent} from "./callbacks/user/mixer-callback/mixer-callback.component";
import {TosComponent} from "./tos/tos.component";
import {PrivacyComponent} from "./privacy/privacy.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'admin/agreement', component: AgreementComponent, canActivate: [AuthGuard]},
  {path: 'callback/discord', component: DiscordCallbackComponent},
  {path: 'callback/patreon', component: PatreonCallbackComponent, canActivate: [AuthGuard]},
  {path: 'callback/patreon/admin', component: PatreonCallbackAdminComponent, canActivate: [AuthGuard]},
  {path: 'callback/twitch', component: TwitchCallbackComponent, canActivate: [AuthGuard]},
  {path: 'callback/twitch/admin', component: TwitchCallbackAdminComponent, canActivate: [AuthGuard]},
  {path: 'callback/mixer', component: MixerCallbackComponent, canActivate: [AuthGuard]},
  {path: 'callback/mixer/admin', component: MixerCallbackAdminComponent, canActivate: [AuthGuard]},
  {path: 'dashboard/minecraft', component: MinecraftComponent, canActivate: [AuthGuard]},
  {path: 'tos', component: TosComponent},
  {path: 'privacy', component: PrivacyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
