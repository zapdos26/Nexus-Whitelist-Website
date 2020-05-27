export class GameServer {
  id:string
  name:string
  type:string
  ownerId: string
  minecraftRegistered: boolean;
  steamRegistered: boolean;
  patreonRegistered: boolean;
  patreonMinimum: number;
  twitchRegistered: boolean;
  twitchFollow: boolean;
  twitchPrime: boolean;
  twitch1000: boolean;
  twitch2000: boolean;
  twitch3000: boolean;
  mixerRegistered: boolean;
  mixerFollow: boolean;
  mixerSubscribe: boolean;
  youtubeRegistered: boolean;
  createdAt: Date;
  updatedAt: Date;
}
