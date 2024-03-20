import pretty from 'pretty';
import { render } from '@testing-library/react';
import IssueItem from '../components/IssueItem';

const issue = {
  url: 'https://api.github.com/repos/microsoft/vscode/issues/68',
  html_url: 'https://github.com/microsoft/vscode/issues/68',
  id: 117635943,
  node_id: 'MDU6SXNzdWUxMTc2MzU5NDM=',
  number: 68,
  title: 'Git: Support git history in VSCode',
};

describe('IssueItem', () => {
  it('should contain the expected text', () => {
    render(<IssueItem key={issue.id} issue={issue} />);

    expect(document.querySelector('.item').textContent).toBe(
      'Git: Support git history in VSCode'
    );
  });

  // In this example, we render the IssueItem component and format the rendered HTML with the pretty package before saving it as an snapshot.
  it('should match snapshot', () => {
    render(<IssueItem key={issue.id} issue={issue} />);

    expect(pretty(document.querySelector('.item').innerHTML)).toMatchSnapshot();
  });
});
