const Component = require('./component.js');

class TaskList extends Component {
  constructor(children) {
    super(children);
  }

render() {
  this.renderInnerHtml
}

  render() {
    return `<ul class="tasks">${this.renderInnerHtml()}</ul>`;
  }
}

module.exports = TaskList;
