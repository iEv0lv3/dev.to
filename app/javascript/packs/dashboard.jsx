import { h, render } from 'preact';
import { Dashboard } from '../dashboard/dashboard';

function loadElement() {
  const root = document.getElementById('dashboard');
  if (root) {
    render(
      <Dashboard
        visits={root.dataset.visits}
        comments={root.dataset.comments}
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
