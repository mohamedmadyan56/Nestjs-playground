import { Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";










@Injectable()
export class UsersService {
    constructor() {

    }
    public findAll(getUserParamDto: GetUsersParamDto, limit: number,
        page: number,) {
        return [
            {
                firstName: 'John',
                email: 'eltop@gmail.com'
            },
            {
                firstName: 'ahmed',
                email: 'ahmed@gmail.com'
            }
        ]
    }



    public findOneById(id: string) {
        return {
            id: 1234,
            firstName: 'Alice',
            email: 'eltop@gmail.com'
        }
    }


}
