import pretty from 'pretty';
import { render } from '@testing-library/react';
import IssueList from '../components/IssueList';

const issues = [
  {
    url: 'https://api.github.com/repos/microsoft/vscode/issues/68',
    html_url: 'https://github.com/microsoft/vscode/issues/68',
    id: 117635943,
    node_id: 'MDU6SXNzdWUxMTc2MzU5NDM=',
    number: 68,
    title: 'Git: Support git history in VSCode',
  },
  {
    url: 'https://api.github.com/repos/microsoft/vscode/issues/127',
    html_url: 'https://github.com/microsoft/vscode/issues/127',
    id: 117711073,
    node_id: 'MDU6SXNzdWUxMTc3MTEwNzM=',
    number: 127,
    title: 'Provide option to opt out of line ending normalisation for files',
  },
];

describe('IssueList', () => {
  // In this example, we render the IssueList component and format the rendered HTML with the pretty package before saving it as an snapshot.
  it('should render', () => {
    // Render the component inside the target container
    render(<IssueList issues={issues} />);

    // Format the rendered HTML with the pretty package
    const html = pretty(document.querySelector('.list').outerHTML);

    // Save the rendered HTML as an snapshot
    expect(html).toMatchSnapshot();
  });

  // In this example, we check to see if the issueList contains the text "Git: Support git history in VSCode"
  it('should contain text', async () => {
    // Render the component
    render(<IssueList issues={issues} />);

    // Check to see if the rendered HTML contains the text "Git: Support git history in VSCode"
    expect(document.querySelector('.list').innerHTML).toContain(
      'Git: Support git history in VSCode'
    );
  });
});
