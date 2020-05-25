import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminComponent} from './admin/admin.component';
import {DiscordCallbackComponent} from "./callbacks/discord-callback/discord-callback.component";
import {PatreonCallbackComponent} from "./callbacks/patreon-callback/patreon-callback.component";
import {MinecraftComponent} from "./dashboard/minecraft/minecraft.component";
import {ErrorComponent} from "./error/error.component";
import {AuthGuard} from "./_helpers/auth.guard";
import {AgreementComponent} from "./admin/agreement/agreement.component";
import {TwitchCallbackComponent} from "./callbacks/twitch-callback/twitch-callback.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'admin/agreement', component: AgreementComponent, canActivate: [AuthGuard]},
  {path: 'callback/discord', component: DiscordCallbackComponent},
  {path: 'callback/patreon', component: PatreonCallbackComponent, canActivate: [AuthGuard]},
  {path: 'callback/twitch', component: TwitchCallbackComponent, canActivate: [AuthGuard]},
  {path: 'dashboard/minecraft', component: MinecraftComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
