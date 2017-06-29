function Cat(owner, name) {
  this.owner = owner;
  this.name = name;
}

Cat.prototype.cuteStatement = function() { return `${this.owner} loves ${this.name}`; };
Cat.prototype.cuteStatement = function() { return `Everyone loves ${this.name}`; };
Cat.prototype.meow = function() { return `${this.name} meows`; };

let c1 = new Cat("gregory", "bob");
let c2 = new Cat("kevin", "john");
let c3 = new Cat("kevin", "derek");

c1.cuteStatement();

c3.meow = function () { return `I hate mondaze`; };
