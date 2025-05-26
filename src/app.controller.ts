import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { iTrack } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/tracks')
  getTracks(): iTrack[] {
    return this.appService.getTracks();
  }
}
