import { Controller, Get, Post, Patch, Delete, Param,Req, Body } from '@nestjs/common';
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
  create(@Body() userData:any): string {
    return userData;
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