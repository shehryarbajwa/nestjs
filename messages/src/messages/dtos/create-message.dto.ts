//Post request validation
//IsString is a decorator that checks if the value is a string
import { IsString } from 'class-validator';

//Body of the request validation

export class CreateMessageDto {
  @IsString()
  content: string;
}
