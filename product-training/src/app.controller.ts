import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  isShutdown: string;

  constructor(private readonly appService: AppService) {
    this.isShutdown = 'false';
  }

  @Get()
  getHello() {
    console.log(this.isShutdown);
    if (this.isShutdown == 'true') {
      throw new Error('System is shutdown');
    } else {
      return {
        message: process.env.DISPLAY_MESSAGE,
        isShutdown: this.isShutdown,
      };
    }
  }

  @Get('status')
  shutdownSystem(@Query('isShutdown') isShutdown: string) {
    if (isShutdown) {
      this.isShutdown = isShutdown;
    }
    return { isShutdown: this.isShutdown };
  }
}
