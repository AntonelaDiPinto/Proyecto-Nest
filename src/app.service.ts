import { Injectable } from '@nestjs/common';

/*@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola a Todos y Todas!';
  }
}
*/

export interface iTrack {
  id: number;
  title: string;
  duration: number;
  artist: string;
}

export const tracks: iTrack[] = [
  {id: 1,
    title: "Canción 1",
    duration: 120,
    artist: "Interprete 1"
  },
  {id: 2,
    title: "Canción 2",
    duration: 80,
    artist: "Interprete 2"
  },
  {id: 3,
    title: "Canción 3",
    duration: 95,
    artist: "Interprete 3"
  }
];

@Injectable()
export class AppService {
  getTracks():any {
    return tracks;
  }
}
