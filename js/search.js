$(function() {
  var items = new ItemsStorage(window.localStorage);
  items.storageItems(MOVIESDATA);
  var moviesArr = items.getStorageItems();
  var movie_type = localStorage.getItem("type");
  var typeArr = TYPE;
  $("#btn").click(function() {
    var movie = $("#input").val();
    localStorage.setItem("type", movie);
    if (movie) {
      $("#input").val("");
      for (let j in typeArr) {
        if (movie == typeArr[j]) {
          $(window).attr('location', 'home_page.html#' + movie);
          $("#" + movie_type).addClass('selected').siblings('a').removeClass('selected');
          $("#" + movie_type).parent('li').siblings('li').find('a').removeClass('selected');
          let selectedType = items.filterItems(movie_type);
          showMovies(selectedType);
        }
      }
      for (let i in moviesArr) {
        switch (movie) {
          case moviesArr[i].id:
          case moviesArr[i].title:
          case moviesArr[i].original_title:
            $(window).attr('location', 'movie_details.html?=' + moviesArr[i].id);
            break;
          default:
            break;
        }
      }
    }
  });
  $("#input").keydown(function(e) {
    if (e.keyCode == 13) {
      var movie = $("#input").val();
      localStorage.setItem("type", movie);
      if (movie) {
        $("#input").val("");
        for (let j in typeArr) {
          if (movie == typeArr[j]) {
            $(window).attr('location', 'home_page.html#' + movie);
            $("#" + movie_type).addClass('selected').siblings('a').removeClass('selected');
            $("#" + movie_type).parent('li').siblings('li').find('a').removeClass('selected');
            let selectedType = items.filterItems(movie_type);
            showMovies(selectedType);
          }
        }
        for (let i in moviesArr) {
          switch (movie) {
            case moviesArr[i].id:
            case moviesArr[i].title:
            case moviesArr[i].original_title:
              $(window).attr('location', 'movie_details.html?=' + moviesArr[i].id);
              break;
            default:
              break;
          }
        }
      }
    }
  });
});