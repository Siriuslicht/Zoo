import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { DogService } from './dog.service';
import type { Request } from "express";

@Controller('dog')
export class DogController {
   constructor(private readonly dogService: DogService) {}

   @Get()
   public getSound(): string {
      return this.dogService.getSound();
   }

   @Get('introduce/:sen')
   public dogIntroduce(@Req() request: Request) {
      console.log("params:", request.params, request.query); 
      const result = this.dogService.dogIntroduce();
   }

   @Post('edit')
   public modifyDetail(@Body() body: any): string {
      console.log("body:", body); 
      return this.dogService.modifyDetail();
   }
}
 