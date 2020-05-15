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
    /* eslint-disable */ const {
      visits,
      visit,
      comments,
      time,
      articles,
      avgArticles,
      words,
      avgWords,
    } = this.props;
    return (
      <div className="display-div">
        <div className="user-visits stats">
          <div className="title">VISITS</div>
          <div className="stat-row">
            <img className="icons" src={displayClick}></img>
            <div className="stats-group">
              <div className="stat-display stat-total">
                <div className="display-big">{visits}</div> total
              </div>
              <div className="stat-display">
                <div className="display-big">{visit}</div> avg/day
              </div>
            </div>
          </div>
        </div>
        <div className="comments stats">
          <div className="title">COMMENTS</div>
          <div className="stat-row">
            <img className="icons" src={displayComment}></img>
            <div className="stat-display">
              <div className="display-big">{comments}</div> total
            </div>
          </div>
        </div>
        <div className="time stats">
          <div className="title">TIME SPENT</div>
          <div className="stat-row">
            <img className="icons" src={displayTime}></img>
            <div className="stat-display">
              <div className="display-big">{time}</div> min/day
            </div>
          </div>
        </div>
        <div className="articles">
          <div className="stats double">
            <div className="title">ARTICLES READ</div>
            <div className="stat-row">
              <img className="icons article-icon" src={displayRead}></img>
              <div className="stat-display stat-total">
                <div className="display-big">{articles}</div> total
              </div>
              <div className="stat-display">
                <div className="display-big">{avgArticles}</div> avg/day
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="stats double">
            <div className="title">WORDS READ</div>
            <div className="stat-row">
              <div className="stat-display stat-total">
                <div className="display-big">{words}</div> total
              </div>
              <div className="stat-display">
                <div className="display-big">{avgWords}</div> avg/day
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
