export class DiscordRole {
  id: string;
  name:string;
  color: string;
  position: number;
  guildId: number;
  ownerId: number;
  configured: boolean = false;
  patreonMinimum: number = null;
  patreonMaximum: number = null;
  twitchFollow: boolean = false;
  twitchPrime: boolean = false;
  twitch1000: boolean = false;
  twitch2000: boolean = false;
  twitch3000: boolean = false;
  mixerFollow: boolean =false;
  mixerSubscribe: boolean = false;
  minecraftRegistered: boolean =false;
  steamRegistered: boolean =false;
  patreonRegistered: boolean =false;
  twitchRegistered: boolean =false;
  mixerRegistered: boolean =false;
  youtubeRegistered: boolean = false;
}
