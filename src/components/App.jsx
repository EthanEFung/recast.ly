class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      playerVideo: exampleVideoData[0]
    };

  }

  onVideoListEntryClick(video) {
    this.setState({
      playerVideo: video 
    });
  }

  componentDidMount() {
    const options = {
      query: 'Bacon Pancakes',
      max: 5,
      key: window.YOUTUBE_API_KEY
    };

    this.props.searchYouTube(options, (dataItems) => {
      this.setState({
        videos: dataItems,
        playerVideo: dataItems[0]
      });
    });
  }

  getYouTubeVideos(query) {
    let options = {
      key: window.YOUTUBE_API_KEY,
      query: query
    };
    this.props.searchYouTube(options, (dataItems) => {
      this.setState({
        videos: dataItems,
        playerVideo: dataItems[0]
      });
    });
  }


  render(props) {

    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.playerVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData} click={this.onVideoListEntryClick.bind(this)} />
        </div>
      </div>
    );
  }
} 

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

