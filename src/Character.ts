import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _MIN = 1;
  private _MAX = 10;
  public name: string;
  
  constructor(n: string) {
    this.name = n;
    this._archetype = new Mage(n);
    this._dexterity = getRandomInt(this._MIN, this._MAX);
    this._strength = getRandomInt(this._MIN, this._MAX);
    this._defense = getRandomInt(this._MIN, this._MAX);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(this._MIN, this._MAX),
    };
    this._race = new Elf(n, this._dexterity);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return { type_: this._energy.type_,
      amount: this._energy.amount };
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (damage <= 0) this._lifePoints -= 1;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt(this._MIN, this._MAX);
    const maxLifePointsRace = this.race.maxLifePoints;
    if (this._maxLifePoints > maxLifePointsRace) {
      this._maxLifePoints = maxLifePointsRace;
    }

    this._strength += getRandomInt(this._MIN, this._MAX);
    this._dexterity += getRandomInt(this._MIN, this._MAX);
    this._defense += getRandomInt(this._MIN, this._MAX);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }
}
