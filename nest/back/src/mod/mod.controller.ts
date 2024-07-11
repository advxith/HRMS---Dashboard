import { Controller, Get } from '@nestjs/common';
import { ModService } from './mod.service';

@Controller('mod')
export class ModController {
    constructor(private readonly modService: ModService) { }

    @Get()
    getAdvaith(): string {
        return this.modService.getAdvaith();
    }

    @Get("students")
    getEngineers(): string {
        return this.modService.getEngineers();
    }
}
