import { IsInt, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ApiPropertyOptional } from "@nestjs/swagger";
export class GetUsersParamDto {
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    @ApiPropertyOptional({
        description: "Get user with specific id",
        example: 1234,
    })
    id?: number;
}