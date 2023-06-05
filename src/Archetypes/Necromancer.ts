import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';

  static createdInstances = 0;

  static override createdArchetypeInstances(): number {
    Necromancer.createdInstances += 1;
    return Necromancer.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
