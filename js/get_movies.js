$(function() {
  let itemsStorage = new ItemsStorage(localStorage);
  itemsStorage.storageItems(movies);
  let allMovies = itemsStorage.getStorageItems();
  showMovies(allMovies);
});