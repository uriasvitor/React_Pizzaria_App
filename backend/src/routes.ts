import { Router } from "express";
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { isAuth } from "./Middleware/isAuth";
import { CreateProductController } from "./controllers/product/CreateProductController";

const router = Router();


router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuth, new DetailUserController().handle)

router.post('/category', isAuth, new CreateCategoryController().handle)

router.get("/category", isAuth, new ListCategoryController().handle)

router.post("/product", isAuth, new CreateProductController().handle)

export { router }
