import React from 'react';

export default class NewStory extends React.Component {
  render() {
    return (
      <form>
        <h4>Write your own Story: ⬇️</h4>
        <label>
          Title:
          <input type="text" />
        </label>
        <label>
          Story:
          <textarea className="materialize-textarea" />
        </label>
        <input className="btn waves-effect waves-light" type="submit" value="Submit" />
      </form>
    );
  }
}
