$(function() {
      var items = new ItemsStorage(window.localStorage);
      items.storageItems(MOVIES_DATA);
      let moviesArr = items.getStorageItems();
      var typeArr = $(".filter_nav li a");
      var movies = $("#input").val();
      $("#btn").click(function() {
        if (movies) {
          $("#input").val("");
          for (let j in typeArr) {
            if (movies == typeArr[j].id) {
              //switch to homepape movies pages
            } else {
              for (let i in moviesArr) {
                switch (movies) {
                  case moviesArr[i].id:
                  case moviesArr[i].title:
                  case moviesArr[i].original_title:
                    //all switch to detail html
                    // $("")
                    // location.href = "movie_details.html";
                    break;
                  default:
                    layer.open({
                      title: '提示信息',
                      content: '仅支持按类别、电影名称、id查找'
                    });
                    window.location.reload();
                    break;
                }
              }
            };
          }
        }
      });
      $("#input").keydown(function(e) {
        if (e.keyCode == 13) {
          if (movies) {
            $("#input").val("");
            for (let j in typeArr) {
              if (movies == typeArr[j].id) {
                //switch to homepape movies pages
              } else {
                for (let i in moviesArr) {
                  switch (movies) {
                    case moviesArr[i].id:
                    case moviesArr[i].title:
                    case moviesArr[i].original_title:
                      //all switch to detail html
                      // $("")
                      // location.href = "movie_details.html";
                      break;
                    default:
                      layer.open({
                        title: '提示信息',
                        content: '仅支持按类别、电影名称、id查找'
                      });
                      window.location.reload();
                      break;
                  }
                }
              };
            }
          }
        }
      });
    }