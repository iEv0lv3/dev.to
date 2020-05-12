import { h, Component } from 'preact';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    /* eslint-disable */ const { visits, comments } = this.props;

    return (
      <div>
        <div className="user-visits">
          User visits:
          {visits}
        </div>
        <div className="comments">
          Comment count:
          {comments}
        </div>
      </div>
    );
  }
}
