import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
   public getSound(): string {
      return "MEOW";
   }

   public introduce(): string {
      return "My Name is Tom!";
   }
}
