import { Test, TestingModule } from '@nestjs/testing';
import { ConditionerService } from './conditioner.service';

describe('ConditionerService', () => {
  let service: ConditionerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConditionerService],
    }).compile();

    service = module.get<ConditionerService>(ConditionerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
