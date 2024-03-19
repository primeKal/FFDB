import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';




@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UsersService) {
        super({
             jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
             ignoreExpiration: false,
             secretOrKey: "dmad,samda.,smda.,smda.,sdm.,samda.,sdm.,sa",
        });  
    }
    async validate(payload: any){
      let user = await this.userService.getOneUserById(payload.id)
      console.log(user)
      if (!user){
        throw new UnauthorizedException();
      }
      return user.dataValues
    }
}