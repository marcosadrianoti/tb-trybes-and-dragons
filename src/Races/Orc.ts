import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;

  static createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  static override createdRacesInstances(): number {
    Orc.createdInstances += 1;
    return Orc.createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}