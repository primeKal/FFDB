import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginCompanyDto } from './dtos/login.company.dto';
import { LocalAuthGuard } from './guards/localAuthGuards';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(authService: AuthService){

    }
    @UseGuards(LocalAuthGuard)
    @Post("login")
    public async loginUser(@Body() loginUser: LoginCompanyDto, 
                            @Req() req){
      return req.user
    }

    // @UseGuards(GoogleAuthGuard)
    // @Get("login/google")
    // public async loginWithGoogle(): Promise<any> {
    //   return ;
    // }

    // @UseGuards(GoogleAuthGuard)
    // @Get("callback/google")
    // public async callBackGoogle(@Req() req): Promise<any> {
    //   return req.user
    // }

}
