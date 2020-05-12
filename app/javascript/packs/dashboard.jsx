import { h, render } from 'preact';
import { Dashboard } from '../dashboard/dashboard';

function loadElement() {
  const root = document.getElementById('dashboard');
  console.log(root.dataset.avgArticles)
  if (root) {
    render(
      <Dashboard
        visits={root.dataset.visits}
        visit={root.dataset.visit}
        comments={root.dataset.comments}
        time={root.dataset.time}
        articles={root.dataset.articles}
        avgArticles={root.dataset.avgarticles}
        words={root.dataset.words}
        avgWords={root.dataset.avgwords}
      />,
      root,
      root.firstElementChild,
    );
  }
}

window.InstantClick.on('change', () => {
  loadElement();
});

loadElement();
