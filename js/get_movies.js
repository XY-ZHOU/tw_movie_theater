$(function() {
  let itemsStorage = new ItemsStorage(localStorage);
  itemsStorage.storageItems(movies);
  let allMovies = itemsStorage.getStorageItems();
  showMovies(allMovies);

  $(".filter_nav li a").on("click", function(event) {
    $(this).addClass('selected').siblings('a').removeClass('selected');
    $(this).parent('li').siblings('li').find('a').removeClass('selected');
    let filterWord = $(this).text().trim();
    let filterMovies = itemsStorage.filterItems(filterWord);
    showMovies(filterMovies);
  });
});