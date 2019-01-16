function showMovies(items) {
  $('.movies_message').html('');
  $('.page p').html('');
  let itemCount = 12;
  let PageCount = Math.ceil(items.length / itemCount);
  let currentPage = 1;

  //show the first page
  $('.page p').html("第" + currentPage + "页/共" + PageCount + "页");
  isShowpageBtn(currentPage, PageCount);
  traverseItems(currentPage, itemCount, items);

}

