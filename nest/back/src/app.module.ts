import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModModule } from './mod/mod.module';
import { ModService } from './mod/mod.service';
import { ModController } from './mod/mod.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { StudentModule } from './student/student.module';
@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'back',
    synchronize: false,
    autoLoadModels: true
  }),
ModModule,
StudentModule],
  controllers: [AppController, ModController],
  providers: [AppService, ModService],
})
export class AppModule {}
