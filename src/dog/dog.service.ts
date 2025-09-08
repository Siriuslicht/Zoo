import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
   public getSound(): string {
      return "WOOF-WOOF";
   }

   public dogIntroduce(): string {
      return "My name is Otis";
   }

   public modifyDetail(): string{
      return "Modified";
   }
}
