import { Module } from '@nestjs/common';
import { ConditionerService } from 'src/conditioner/conditioner.service';
import { EngineModule } from 'src/engine/engine.module';

@Module({
    imports: [EngineModule],
    providers: [ConditionerService],
    exports: [ConditionerService],
})
export class ConditionerModule { }