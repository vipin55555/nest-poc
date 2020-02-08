import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable } from '@nestjs/common';
import { ExtractJwt } from 'passport-jwt';
import { Global } from 'src/app.global';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: Global.jwt.secret,
        });
    }

    async validate(payload: any) {
        return { name: payload.name, email: payload.email };
    }
}
