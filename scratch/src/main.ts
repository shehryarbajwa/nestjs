import { Controller, Module, Get } from '@nestjs/common';

@Controller()
class AppController {
  //Route Handler of GET again from common
  @Get()
  //Get root route method
  getRootRoute() {
    return 'hi there';
  }
}
