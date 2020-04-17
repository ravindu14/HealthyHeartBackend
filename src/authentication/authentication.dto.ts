import { IsString, IsEmail, IsNumber, IsBoolean } from "class-validator";

export class LogInDto {
  @IsString()
  public username: string;

  @IsString()
  public password: string;
}

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public username: string;

  @IsString()
  public password: string;

  @IsNumber()
  public age: number;

  @IsString()
  public gender: string;
}
