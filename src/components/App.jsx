class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videoList: defaultVideoList,
      videoPlayer: defaultVideo
    };
  }
  
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.videoPlayer}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} parentState={this}/>
        </div>
      </div>  
    );
  }

  componentDidMount() {
    // this.setState(searchYouTube(defaultSearch, ))
  }
  
}
var defaultSearch = {query: '', max: 5, key: window.YOUTUBE_API_KEY };
var defaultVideo = {
  id: {
    videoId: ''
  },

  snippet: {
    title: '',
    description: ''
  }
};

var defaultVideoList = [{
  id: {
    videoId: ''
  },

  snippet: {
    title: '',
    description: '',
    thumbnails: {
      default: {
        url: ''
      }
    }
  }
}];

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

ReactDOM.render(<App/>, document.getElementById('app'));
