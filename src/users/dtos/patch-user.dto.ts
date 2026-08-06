import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';












// ده معناه خد كل ال propereties and validation that in CreateUserDto واعمل منها نسخه يكون فيها كل شي optional

export class PatchUserDto extends PartialType(CreateUserDto) {











}