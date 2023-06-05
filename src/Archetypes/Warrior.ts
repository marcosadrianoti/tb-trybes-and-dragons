import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';

  static createdInstances = 0;

  static override createdArchetypeInstances(): number {
    Warrior.createdInstances += 1;
    return Warrior.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
