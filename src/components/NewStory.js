import React from 'react';

export default class NewStory extends React.Component {
  render() {
    return (
      <form>
        <label>
          Title:
          <input type="text" />
        </label>
        <label>
          Story:
          <input type="text" />
        </label>
        <input className="btn" type="submit" value="Submit" />
      </form>
    );
  }
}
