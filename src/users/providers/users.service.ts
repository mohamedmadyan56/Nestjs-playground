import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/providers/auth.service";
















@Injectable()
export class UsersService {
    constructor(@Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService) {

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
        const isAuth = this.authService.isAuth();
        console.log(isAuth)
    }



    public findOneById(id: string) {
        return {
            id: 1234,
            firstName: 'Alice',
            email: 'eltop@gmail.com'
        }
    }


}
