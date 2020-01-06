import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from './user.service';


@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService],
    imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secretOrPrivateKey: 'secret12356789'
  })
  ]
})
export class AuthModule {}
