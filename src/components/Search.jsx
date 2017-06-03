var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={doSearch.bind(this, props.parentState)}/>
    <button className="btn hidden-sm-down" onClick={doSearch.bind(this, props.parentState)}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

var doSearch = (parentState) => {
  var query = $('.form-control').val();
  var searchData = {query: query, max: 5, key: window.YOUTUBE_API_KEY };

  searchYouTube(searchData, function(data) {
    parentState.setState({
      videoList: data,
      videoPlayer: data[0]
    });
  });
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

var testfun = () => {
  console.log();
};