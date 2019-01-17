$(function() {
  var items = new ItemsStorage(window.localStorage);
  items.storageItems(MOVIES_DATA);
  let moviesArr = items.getStorageItems();
  var typeArr = $(".filter_nav li a");
  console.log(typeArr);
  $("#btn").click(function() {
    var movies = $("#input").val();
    console.log(movies);
    if (movies) {
      $("#input").val("");
      for (let j in typeArr) {
        if (movies == typeArr[j].id) {
          $("#" + movies).addClass('selected').siblings('a').removeClass('selected');
          $("#" + movies).parent('li').siblings('li').find('a').removeClass('selected');
          let selectedType = items.filterItems(movies);
          showMovies(selectedType);
          $(window).attr('location', 'home_page.html#' + movies);
        }
      }
      for (let i in moviesArr) {
        switch (movies) {
          case moviesArr[i].id:
          case moviesArr[i].title:
          case moviesArr[i].original_title:
            $(window).attr('location', 'movie_details.html?=' + moviesArr[i].id);
            break;
          default:
            // layer.open({
            //   title: '提示信息',
            //   content: '仅支持按类别、电影名称、id查找',
            //   time: 10000,
            // });
            break;
        }
      }
    }
  });
  $("#input").keydown(function(e) {
    if (e.keyCode == 13) {
      var movies = $("#input").val();
      console.log(movies);
      if (movies) {
        $("#input").val("");
        for (let j in typeArr) {
          if (movies == typeArr[j].id) {
            $("#" + movies).addClass('selected').siblings('a').removeClass('selected');
            $("#" + movies).parent('li').siblings('li').find('a').removeClass('selected');
            let selectedType = items.filterItems(movies);
            showMovies(selectedType);
            $(window).attr('location', 'home_page.html#' + movies);
          }
        }
        for (let i in moviesArr) {
          switch (movies) {
            case moviesArr[i].id:
            case moviesArr[i].title:
            case moviesArr[i].original_title:
              $(window).attr('location', 'movie_details.html?=' + moviesArr[i].id);
              break;
            default:
              // layer.open({
              //   title: '提示信息',
              //   content: '仅支持按类别、电影名称、id查找',
              //   time: 10000,
              // });
              break;
          }
        }
      }
    }
  });
});