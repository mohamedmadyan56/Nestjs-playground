import { Controller, Get, Post, Patch, Delete, Param,Req } from '@nestjs/common';
import type { Request } from 'express';
@Controller('users')
export class UserController {
  @Get()
  find(): string[] {
    return ['ahmed', 'mohamed', 'madyan'];
  }

  @Get(':username')
  findOne(@Param('') param: any): string {
    return param;
  }

  @Post()
  create(@Req() req:Request): string {
    console.log(req.body);
    console.log(req.params);
    return 'Create new user';
  }

  @Patch(':id')
  update(@Param('id') id: string): string {
    return `Update user ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `Remove user ${id}`;
  }
}