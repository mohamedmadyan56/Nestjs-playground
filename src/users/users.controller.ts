import { Controller, Get, Post, Patch, Delete, Param } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  find(): string[] {
    return ['ahmed', 'mohamed', 'madyan'];
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Find user with id ${id}`;
  }

  @Post()
  create(): string {
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