for (i = 1; i < 7; i++) {
  recommendation();
}

function recommendation() {
  var i = parseInt(Math.random() * 30, 10) + 1;
  let label = `<a href='movie_details.html?=` + movies[i].id + `'  class="movie_item" id=` + movies[i].id + `>
              <div>
              <div class="movie_img">
              <img src=` + movies[i].image + ` alt=""/>
              </div>
              <div class="movie_title">
              <p class="name">` + movies[i].title + `</p>
              <p class="movie_score">
              评分：` + movies[i].rating + `
              </p>
             </div>
             </div>
             </a>`;
  $('.move_recommendation').append(label);
}