var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      type: 'video',
      videoEmbeddable: 'true',
      part: 'snippet'
    },
    success: function(data) { callback({videoPlayer: data}); },
    error: function() { console.log('error!!' ); }
  });

};

window.searchYouTube = searchYouTube;