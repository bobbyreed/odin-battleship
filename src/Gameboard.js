class Gameboard {
  constructor() {
    //Array.from + factory — Creates 100 independent objects. Using .fill({}) would give every cell the same object reference — mutating one would mutate all!
    this.board = Array.from({ length: 100 }, () => ({
      hasShip: null, isShot: false
    }));
    this.ships = [];
  }
//placeShip — The ship already knows where it goes via position. We just mark those cells.
  placeShip(ship) {

    ship.position.forEach(index => {
      this.board[index].hasShip = ship;
    });
    this.ships.push(ship);
  }
//receiveShot — Sets isShot = true on the cell, then tells the ship if it was hit.
  receiveShot(index) {
    const cell = this.board[index];
    cell.isShot = true;
    if (cell.hasShip) cell.hasShip.hit(index);
  }
//opponentBoard — Hides ship locations. Returns only what's been revealed. This is what the AI reads!
  opponentBoard() {
    return this.board.map(cell => {
      if (cell.isShot && cell.hasShip) return 'hit';
      if (cell.isShot) return 'miss';
      return 'empty';
    });
  }

  allSunk() {
    return this.ships.every(ship => ship.isSunk());
  }
}
module.exports = Gameboard;