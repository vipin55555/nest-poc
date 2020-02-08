import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { Global } from 'src/app.global';
import { JwtStrategy } from './jwt.strategy';
// import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: Global.jwt.secret,
      signOptions: {
        expiresIn: Global.jwt.expiresIn,
      },
    }),
  ],
  providers: [AuthService, JwtStrategy,
    // UserService
  ],
  exports: [AuthService],
})
export class AuthModule { }
