var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'key': options.key,
      'maxResults': options.max,
      'q': options.query
    }, 
    success: function(data) {
      callback(data.items);
    }

  });
};

window.searchYouTube = searchYouTube;