import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { EngineModule } from 'src/engine/engine.module';
import { ConditionerModule } from 'src/condintioner/condintioner.module';

@Module({
  controllers: [CarController],
  imports: [EngineModule, ConditionerModule]
})
export class CarModule { }
