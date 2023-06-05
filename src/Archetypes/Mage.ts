import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';

  // constructor(name: string) {
  //   super(name);
  //   this._energyType = 'mana';
  // }

  static createdInstances = 0;

  static override createdArchetypeInstances(): number {
    Mage.createdInstances += 1;
    return Mage.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
