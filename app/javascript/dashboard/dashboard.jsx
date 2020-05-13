import { h, Component } from 'preact';
import displayRead from '../../assets/images/display_read.png';
import displayClick from '../../assets/images/display_click.png';
import displayTime from '../../assets/images/display_time.png';
import displayComment from '../../assets/images/display_comment.png';


export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /* eslint-disable */ const { visits, visit, comments, time, articles, avgArticles, words, avgWords } = this.props;
console.log(avgArticles)
    return (
      <div className="display-div">
        <div className="user-visits stats">
          <div className="title">VISITS</div>
          <img className="icons" src={displayClick}></img>
          {visits} total
          {visit} avg/day
        </div>
        <div className="comments stats">
          <div className="title">COMMENTS</div>
          <img className="icons" src={displayComment}></img>
          {comments} total
        </div>
        <div className="time stats">
          <div className="title">TIME SPENT</div>
          <img className="icons" src={displayTime}></img>
          {time} per day
        </div>
        <div className="articles">
          <div className="border">
            ARTICLES READ
            <img className="icons article-icon" src={displayRead}></img>
            {articles} total
            {avgArticles} avg/day
          </div>
            WORDS READ
            {words} total
            {avgWords} avg/day
        </div>
      </div>
    );
  }
}
