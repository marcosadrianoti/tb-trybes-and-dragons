import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;

  static createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  static override createdRacesInstances(): number {
    Dwarf.createdInstances += 1;
    return Dwarf.createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
