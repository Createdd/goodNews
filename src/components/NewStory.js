import React from 'react';

export default class NewStory extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Write your own Story: ⬇️</h4>
        <label>
          Title:
          <input type="text" />
        </label>
        <label>
          Story:
          <textarea className="materialize-textarea" />
        </label>
        <button className="btn waves-effect waves-light" type="submit">Submit 🚀</button>
      </form>
    );
  }
}
