import {DiscordRole} from './DiscordRole';

export class DiscordServer {
  id: string;
  name:string;
  ownerId: string;
  roles: DiscordRole[];
}
