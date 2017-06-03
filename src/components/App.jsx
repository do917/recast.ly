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
        <Nav parentState={this} />
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
    var appThis = this;
    searchYouTube(defaultSearch, function(data) {
      appThis.setState({
        videoList: data,
        videoPlayer: data[0]
      });
    });
  }
  
}
var defaultSearch = {query: '', max: 5, key: window.YOUTUBE_API_KEY };
var defaultVideo = {
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
};
var defaultVideoList = [defaultVideo];

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

ReactDOM.render(<App/>, document.getElementById('app'));
