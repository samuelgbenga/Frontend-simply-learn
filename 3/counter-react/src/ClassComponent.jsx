import React from "react";

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "name",
      age: 0,
    };

    this.num = 0;
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <h1>Hello, {this.num}!</h1>
        <h1>Hello, {this.props.something}!</h1>

        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />

        <span>{this.state.age}</span>
        <button
          onClick={() =>
            this.setState((prev) => {
              return { age: prev.age + 1 };
            })
          }
        >
          increase
        </button>

        <button
          onClick={() =>
            this.setState((prev) => {
              return { age: prev.age - 1 };
            })
          }
        >
          Decrease
        </button>

        <br />
        <br />
        My name is {this.state.name} and I am {this.state.age} years old.
      </div>
    );
  }
}
