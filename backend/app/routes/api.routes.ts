import {Router, Request, Response} from 'express';
import {CustomerController} from '../controllers/customer.controller';
import {ItemController} from '../controllers/item.controller';
import {RepController} from '../controllers/rep.controller';
import {ShipMethodController} from '../controllers/shipMethod.controller';
const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send("Welcome to API routes");
});

router.post('/customer/create', (req: Request, res: Response) => {
    CustomerController.createNewCustomer(res, req.body);
});

router.get('/customer/all/page=:paginator', (req: Request, res: Response) => {
    CustomerController.getAllCustomers(res, req.params.paginator);
});

router.post('/item/create', (req: Request, res: Response) => {
    ItemController.createItem(res, req.body);
});

router.get('/item/all', (req: Request, res: Response) => {
    ItemController.getAllItem(res);
});

router.post('/rep/create', (req: Request, res: Response) => {
    RepController.createRep(res, req.body);
});

router.get('/rep/all', (req: Request, res: Response) => {
    RepController.getAllRep(res);
});

router.get('/rep/id/:id', (req: Request, res: Response) => {
    RepController.getRepById(res, req.params.id);
});

router.post('/shipMethod/create', (req: Request, res: Response) => {
    ShipMethodController.createShipMethod(res, req.body);
});

router.get('/shipMethod/all', (req: Request, res: Response) => {
    ShipMethodController.getAllShipMethod(res);
});

export const ApiRoute: Router = router;
