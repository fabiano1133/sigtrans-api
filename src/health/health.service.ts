import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  async check(): Promise<any> {
    return {
      message: 'Application is running!',
    };
  }
}
