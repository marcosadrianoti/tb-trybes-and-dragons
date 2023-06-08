import Battle from './Battle';
import Fighter from '../Fighter';

const LOSER = 0;

export default class PVP extends Battle {
  constructor(
    player1: Fighter,
    private player2: Fighter,
  ) {
    super(player1);
  }

  public override fight(): number {
    do {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    } while (!(this.player1.lifePoints < LOSER
      || this.player2.lifePoints < LOSER));
    return super.fight();
  }
}
