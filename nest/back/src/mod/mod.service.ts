import { Injectable } from '@nestjs/common';

@Injectable()
export class ModService {
    getAdvaith(): string {
        return 'Hello Advaith!';
      }
    
      getEngineers(): string {
        return 'Engineer info';
      }
}

