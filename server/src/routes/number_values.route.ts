import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import NumberValuesController from '@/controllers/number_values.controller';

class NumbersRoute implements Routes {
  public path = '/number-value';
  public router = Router();
  public numberValuesController = new NumberValuesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.numberValuesController.getNumberValue);
    this.router.post(`${this.path}/increment`, this.numberValuesController.incrementNumberValue);
  }
}

export default NumbersRoute;
