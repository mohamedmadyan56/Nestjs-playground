import { Controller, Get, Query, Param } from "@nestjs/common"
@Controller('users')
export class UserController {
    @Get(':id')
    getUsers(
        @Param('id') id: any,
        @Query('limit') limit: any,   // query param
        @Query('page') page: any,

    ) {
        return 'User Founded';
    }
}