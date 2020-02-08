import { Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/model/interface/user.interface';
import { UserService } from './user.service';
import { SignUpReqDto, SignInReqDto } from 'src/model/dto/user.dto';
import { Global } from 'src/app.global';
import config from 'src/config/config';
import { JwtToken } from 'src/model/dto/auth.dto';

@Controller(`${config.app.apiVersion}/user`)
export class UserController {
    constructor(private userService: UserService) { }

    @Post('signup')
    public signup(@Body() signupDto: SignUpReqDto): Promise<JwtToken> {
        return this.userService.signup(signupDto);
    }

    @UseGuards(AuthGuard('local'))
    @Post('signin')
    public signin(@Body() signinDto: SignInReqDto): Promise<JwtToken> {
        return this.userService.signin(signinDto);
    }

}
