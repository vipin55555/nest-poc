import { Injectable, UnprocessableEntityException, InternalServerErrorException } from '@nestjs/common';
import { User } from '../model/interface/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Global } from 'src/app.global';
import { SignUpReqDto, SignInReqDto } from 'src/model/dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload, JwtToken } from 'src/model/dto/auth.dto';

@Injectable()
export class UserService {
    users: User[] = [];
    constructor(@InjectModel('User') private readonly userModel: Model<User>, private readonly jwtService: JwtService) {

    }

    public async signup(signupDto: SignUpReqDto): Promise<JwtToken> {
        const existingUsers: User[] = await this.userModel.find({ email: signupDto.email });
        if (existingUsers != null && existingUsers.length) {
            throw new UnprocessableEntityException({
                message: Global.httpErrorMessage.userAlreadyExists,
            });
        }
        const user: User = await this.userModel.create(signupDto);
        if (user) {
            return this.generateToken(user);
        }
        throw new InternalServerErrorException({
            message: Global.httpErrorMessage.somethingWentWrong,
        });
    }

    public async signin(signinDto: SignInReqDto): Promise<JwtToken> {
        const existingUser: User = await this.userModel.findOne
            ({ email: signinDto.email });
        if (!existingUser) {
            throw new UnprocessableEntityException({
                message: Global.httpErrorMessage.invalidEmail,
            });
        }

        if (!signinDto.password || existingUser.password !== signinDto.password) {
            throw new UnprocessableEntityException({
                message: Global.httpErrorMessage.invalidCredentials,
            });
        }

        return this.generateToken(existingUser);
    }

    public async getUserbyName(name: string): Promise<User | undefined> {
        return this.users.find(x => x.name === name);
    }

    public generateToken(user: User): JwtToken {
        const payload: JwtPayload = {
            name: user.name,
            email: user.email,
        };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
}
