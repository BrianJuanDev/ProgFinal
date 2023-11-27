import { userController } from "../controllers/user.controller";
import { BaseRouter } from "./router";

export class UserRouter extends BaseRouter<userController> {
    constructor() {
        super(userController)
    }

    routes(): void {
        this.router.get('user/', (req, res)=> this.controller.getUser(req, res))
    }
}