var data = [];
var idItem = location.href.split('=');
var id = idItem[1];
for (let i = 1; i < movies.length; i++) {
  if (id === movies[i].id) {
    data = movies[i];
  }
}