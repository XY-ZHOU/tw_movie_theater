class ItemsStorage {
  constructor(localStorage) {
    this.itemsStorage = localStorage;
  }
  storageItems(movies) {
    this.itemsStorage.setItem('movies', JSON.stringify(movies));
  }
  getStorageItems() {
    return JSON.parse(this.itemsStorage.getItem('movies'));
  }
}