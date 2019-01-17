var obj;

function viewComments(datas) {
  obj = eval(datas.comments);
  let label = `<li>用户${obj[0].id}:${obj[0].content}评论时间${obj[0].created_at
}</li>
  <li>用户${obj[1].id}:${obj[1].content}评论时间${obj[0].created_at
}</li>
  <li>用户${obj[2].id}:${obj[2].content}评论时间${obj[0].created_at
}</li>
  <li>用户${obj[3].id}:${obj[3].content}评论时间${obj[0].created_at
}</li>
  <li>用户${obj[4].id}:${obj[4].content}评论时间${obj[0].created_at
}</li>`;
  $('.movie_content').append(label)
}

function getReview(id, callback, count = 2, start = 0) {
  $.ajax({
    type: "get",
    url: `https://api.douban.com/v2/movie/subject/${id}/comments`,
    dataType: "jsonp",
    jsonp: "callback",
    data: {
      apikey: "0b2bdeda43b5688921839c8ecb20399b",
      start: start,
      count: count,
      client: "",
      udid: ""
    },
    success: function(json) {
      callback(json);
    },
    error: function() {
      console.log(`failed to get movie comments`);
    }
  })
}
getReview(1292223, viewComments, 5)