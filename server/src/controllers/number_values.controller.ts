import { NextFunction, Request, Response } from 'express';
import numberValueService from '@services/number_values.service';

class NumberValuesController {
  public numberValueService = new numberValueService();

  public getNumberValue = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const currentValue = await this.numberValueService.getCurrentValue();

      res.status(200).json({ currentValue });
    } catch (error) {
      next(error);
    }
  };

  public incrementNumberValue = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newValue = await this.numberValueService.incrementValue();

      res.status(200).json({ newValue });
    } catch (error) {
      next(error);
    }
  };
}

export default NumberValuesController;
