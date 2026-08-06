import { Controller, Get, Query, Param, ParseIntPipe } from "@nestjs/common"
@Controller('users')
export class UserController {
  @Get(':id')
  getUsers(
    @Param('id', ParseIntPipe) id: number,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('page', ParseIntPipe) page: number,
  ) {
    console.log({ limit, typeofLimit: typeof limit, page, typeofPage: typeof page });

    return 'user found'
  }
}

