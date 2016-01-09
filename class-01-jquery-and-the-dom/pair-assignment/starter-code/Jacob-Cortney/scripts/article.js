var articles = [];

function Article (opts) {
  this.title = opts.title,
  this.category = opts.category,
  this.author = opts.author,
  this.authorUrl = opts.authorUrl,
  this.publishedOn = opts.publishedOn,
  this.body = opts.body;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();

  $newArticle.data('category', this.category);

  //This jQuery selects HTML elements and fills them with info from the constructor function
  $newArticle.find('h1').html(this.title);

  $newArticle.find('a').html(this.author);

  $newArticle.find('time').html(this.publishedOn);

  $newArticle.find('.article-body').html(this.body);

  $newArticle.find('a#link').attr('href', this.authorUrl);

  // Include the publication date as a 'title' attribute to show on hover:
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn)

  // Display the date as a relative number of "days ago":
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago')

  $newArticle.append('<hr>');

  $newArticle.removeClass('template');//removes template class from cloned article

  return $newArticle;
}

$(document).ready( function() {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(ele) {
    articles.push(new Article(ele));
  })

  articles.forEach(function(a){
    $('#articles').append(a.toHtml())
  });
});
