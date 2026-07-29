import { Injectable } from '@nestjs/common';

@Injectable()
export class ConditionerService {

    conditionerOn() {
        return 'ConditionerON'
    }
}
