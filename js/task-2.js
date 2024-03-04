
class Storage {
  #items;
  constructor(items =[]) {
this.#items = items;
  }
  getItems() {
return this.#items;
  }
  addItem(newItem) {
this.#items.push(newItem);
  }
removeItem(itemToRemove) {
const indexItems = this.#items.indexOf(itemToRemove);
if (indexItems === -1) {
  return;
}
this.#items.splice(indexItems,1);
}

}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]