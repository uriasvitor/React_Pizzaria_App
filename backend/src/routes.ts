import { Router } from "express";
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuth } from "./Middleware/isAuth";

const router = Router();


router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuth, new DetailUserController().handle)

export { router }
