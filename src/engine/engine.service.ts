import { Injectable } from '@nestjs/common';
import { BatteryService } from 'src/battery/battery.service';

@Injectable()
export class EngineService {
    constructor(private readonly batterService: BatteryService) {

    }
    startEngine() {
        return `${this.batterService.powerSupply}
            engine is working
        `
    }
}
