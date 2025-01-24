import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { user } from '@prisma/db';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Partial<user> | null => {
    const request = ctx.switchToHttp().getRequest();
    return request.parsedPayload ? request.parsedPayload.user : null;
  },
);
