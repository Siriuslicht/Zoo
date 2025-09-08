import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
   constructor(private readonly catService: CatService) {}

   @Get()
   public getSound(): string {
      return this.catService.getSound();
   }

   @Get("greet")
   public introduce(): string {
      return this.catService.introduce();
   }
}
