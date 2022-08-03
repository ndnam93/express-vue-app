import DB from '@databases';
import { NumberValue } from '@/interfaces/number_values.interface';

class UserService {
  public numberValues = DB.NumberValues;

  public async getCurrentValue(): Promise<number> {
    const [numberValue] = await this.numberValues.findOrCreate({
      where: { id: 1 },
    });
    return numberValue.value;
  }

  public async incrementValue(): Promise<number> {
    const incrementResult = await this.numberValues.increment('value', { by: 1, where: {} });
    return incrementResult?.[0]?.[0]?.[0]?.value;
  }
}

export default UserService;
