import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'CRUD App with GraphQL, Prisma & Neon DB  is running';
  }
}