import React from 'react';
import { Link } from 'react-router';

export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <div className="row">
            <div className="col s12 center">
              <div className="card">
                <div className="card-image">
                  <img
                    src="https://images.unsplash.com/photo-1483425571841-9662f86c7154?dpr=2&amp;auto=format&amp;fit=crop&amp;w=767&amp;h=382&amp;q=80&amp;cs=tinysrgb&amp;crop=" alt="https://unsplash.com/"
                  />
                </div>
                <div className="card-content">
                  <h3>Site does not exist - ↪️ Back</h3>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
