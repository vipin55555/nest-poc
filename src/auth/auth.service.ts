import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/model/interface/user.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {

  }

  async validateUser(name: string, pass: string): Promise<any> {
    const user = await this.userService.getUserbyName(name);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // async login(user: User) {
  //   const payload = { name: user.name, sub: user.password };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }
}
