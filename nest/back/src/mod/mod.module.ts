import { Module } from '@nestjs/common';
import { ModService } from './mod.service';
import { ModController } from './mod.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { mod } from './mod.model';

@Module({
    imports:[SequelizeModule.forFeature([mod])],
    providers: [ModService],
    controllers: [ModController]
})
export class ModModule { }