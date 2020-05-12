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
    /* eslint-disable */ const { visits, comments } = this.props;

    return (
      <div className="display-div">
        <div className="user-visits stats">
          VISITS
          <img className="icons" src={displayClick}></img>
          {visits} total
        </div>
        <div className="comments stats">
          COMMENTS
          <img className="icons" src={displayComment}></img>
          {comments} total
        </div>
        <div className="time stats">
          TIME SPENT
          {/* {comments} */}
          <img className="icons" src={displayTime}></img>
        </div>
        <div className="articles stats">
          <div>
            ARTICLES READ
            <img className="icons" src={displayRead}></img>
          </div>
          <div>WORDS READ</div>
        </div>
      </div>
    );
  }
}
