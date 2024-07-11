import { Controller, Body, Get, Param, UsePipes, ValidationPipe, NotFoundException, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { CreateUserDto } from 'src/users/dto/users.dtos';
@Controller('users')
export class UsersController {
    constructor(private readonly userservice: UsersService){}
    @Post('create')
    @UsePipes(ValidationPipe)
    createUsers(@Body() createUserDto: CreateUserDto) {
        return this.userservice.createUser(createUserDto);
    }
}
