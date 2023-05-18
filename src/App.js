/*
  Instructions
    Utilize the props passed to Badge to finish the Badge component
*/

import * as React from "react";

class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <img alt={this.props.name} src={this.props.img} />
        <div>
          <h4>{this.props.name}</h4>
          <p>{this.props.handle}</p>
        </div>
      </div>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Badge
        name="Tyler McGinnis"
        handle="tylermcginnis"
        img="https://avatars0.githubusercontent.com/u/2933430"
      />
    );
  }
}
