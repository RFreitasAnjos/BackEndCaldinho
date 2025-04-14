import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController{
    @Get()
    ping(){
        return{
            nome: 'CaldinhoIranir API',
            status: 'Online',
            timestamp: new Date(),
        }
    }
}