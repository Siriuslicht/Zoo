import { Controller, Get, Req, Res } from '@nestjs/common';
import { DogService } from './dog.service';
import type { Request, Response} from "express";

@Controller('dog')
export class DogController {
   constructor(private readonly dogService: DogService) {}

   @Get()
   public getSound(): string {
      return this.dogService.getSound();
   }

   @Get('introduce/:sen/')
   public dogIntroduce(@Req() request: Request, @Res() response: Response) {
      console.log("params:", request.params, request.query); 
      const result = this.dogService.dogIntroduce();
      response.status(200).send(result);
   }
}
 