import { Router } from 'express';
import { TestController } from '../controllers/testController';

const router = Router();
const testController = new TestController();

router.post('/test', testController.addHello);

export { router as testRoutes };