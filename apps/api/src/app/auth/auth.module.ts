import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

import { JwtModule } from '@nestjs/jwt';


@Module({
    imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secretOrPrivateKey: 'secret12356789'
  })
  ]
})
export class AuthModule {}
