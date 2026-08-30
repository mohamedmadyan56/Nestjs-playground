import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import { Request } from 'express';

import jwtConfig from '../config/jwt.config';

@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,

    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {}

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] =
      request.headers.authorization?.split(' ') ?? [];

    return type === 'Bearer' ? token : undefined;
  }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    // 1. Get HTTP request
    const request = context
      .switchToHttp()
      .getRequest<Request>();

    // 2. Extract Access Token
    const token = this.extractTokenFromHeader(request);

    // 3. Make sure token exists
    if (!token) {
      throw new UnauthorizedException(
        'Access token is required',
      );
    }

    try {
      // 4. Validate JWT
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.jwtConfiguration.secret,
      });

      // 5. Store user information in request
      request['user'] = payload;

      // 6. Allow request
      return true;
    } catch (error) {
      // 7. Reject request
      throw new UnauthorizedException(
        'Invalid or expired access token',
      );
    }
  }
}