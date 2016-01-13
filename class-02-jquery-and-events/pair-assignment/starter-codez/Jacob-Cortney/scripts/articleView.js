// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {

      var val = $(this).find('address a').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#author-filter').append(optionTag);

      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};


articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {

      $('article').hide();
      $('article[data-author="' + $(this).val() + '"]').fadeIn();

    } else {
   $('article:not(.template)').show();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {

      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').fadeIn();

    } else {
      $('article:not(.template)').show();
    }
    $('category-filter').val('');
  })
};

articleView.handleMainNav = function() {

  $('.main-nav').on('click', '.tab', function (e) {
      $('.tab-content').hide();
      $('#' + $(this).attr('data-content')).show();
  });

  $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.

  $('.read-on').on('click', function (e) {
    e.preventDefault();
    $(this).hide();
    $('.article-body *:nth-of-type(n+2)').show();
  })
};

$(document).ready( function () {
  articleView.populateFilters();
  articleView.handleAuthorFilter();
  articleView.handleCategoryFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
});
