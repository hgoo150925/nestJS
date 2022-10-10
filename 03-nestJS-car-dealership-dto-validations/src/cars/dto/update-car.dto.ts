import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  @IsString()
  @MinLength(3) // debe tener minimo 3 letras
  @IsOptional()
  readonly model?: string;
}
