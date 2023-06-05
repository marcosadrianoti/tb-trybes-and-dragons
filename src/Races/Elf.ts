import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;

  static createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  static override createdRacesInstances(): number {
    Elf.createdInstances += 1;
    return Elf.createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}