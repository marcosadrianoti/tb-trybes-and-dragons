import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;

  static createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  static override createdRacesInstances(): number {
    Halfling.createdInstances += 1;
    return Halfling.createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}