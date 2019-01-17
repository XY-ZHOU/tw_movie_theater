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