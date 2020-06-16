class Space {
  constructor() {
    this.names = [];
  }

  add(name) {
    this.names.push(name);
  }

  list() {
    return this.names;
  }
}
