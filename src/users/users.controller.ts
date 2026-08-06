import { Controller, Get, Query, Param, ParseIntPipe } from "@nestjs/common"
@Controller('users')
export class UserController {
  @Get(':id')
  getUsers(
    @Param('id', ParseIntPipe) id: number,
    @Query('limit') limit: any,
    @Query('page') page: any,
  ) {
    console.log({ limit, page })
    return 'user found'
  }
}

