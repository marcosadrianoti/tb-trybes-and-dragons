import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';

  static createdInstances = 0;

  static override createdArchetypeInstances(): number {
    Ranger.createdInstances += 1;
    return Ranger.createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
