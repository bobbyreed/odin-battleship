class Ship {
  //position — Array of 0–99 indices the ship occupies. Its length is the ship's size.
  constructor(name, position) {
    this.name = name;
    this.position = position;
    this.hits = [];
  }

  //hit(index) — Stores the exact index hit, not just a count. Useful for knowing which cells were struck.
  hit(index) {
    this.hits.push(index);
  }
  //isSunk() — Compares array lengths: sunk when the hits count matches the position count.
  isSunk() {
    return this.hits.length >= this.position.length;
  }
}

module.exports = Ship;