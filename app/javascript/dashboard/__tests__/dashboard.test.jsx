import { h } from 'preact';
import render from 'preact-render-to-json';
import { Dashboard } from '../dashboard';

describe('<Dashboard />', () => {
  it('renders properly', () => {
    const tree = render(
      <Dashboard
        visits="1"
        visit="2"
        comments="3"
        time="4"
        articles="5"
        avgArticles="6"
        words="7"
        avgWords="8"
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
