import { Controller, Get, Query, Param, ParseIntPipe, DefaultValuePipe } from "@nestjs/common"
@Controller('users')
export class UserController {
  @Get(':id')
  getUsers(
    @Param('id', ParseIntPipe) id: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log({ limit, typeofLimit: typeof limit, page, typeofPage: typeof page });

    return 'user found'
  }
}

