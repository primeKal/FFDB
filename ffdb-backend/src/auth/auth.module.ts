import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [ forwardRef(() => UsersModule),JwtModule.register({
    secret: "dmad,samda.,smda.,smda.,sdm.,samda.,sdm.,sa",
    // privateKey:'sdlklkdsasalkdaslksa',
    signOptions: { expiresIn: "1d" }
  })],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService]
})
export class AuthModule { }
