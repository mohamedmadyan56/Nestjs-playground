import { Injectable } from '@nestjs/common';

@Injectable()
export class BatteryService {
    powerSupply() {
        return 'Battery is Working you can start your engine';
    }
}
