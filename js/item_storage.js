class ItemsStorage {
  constructor(localStorage) {
    this.itemsStorage = localStorage;
  }
  storageItems(movies) {
    this.itemsStorage.setItem('movies', JSON.stringify(movies));
  }
}