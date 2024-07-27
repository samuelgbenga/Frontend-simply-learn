import React from "react";

export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
    };
  }

  // component did mount
  // useEffect from the without dependency
  // as long as the component lands the first time
  componentDidMount() {
    console.log("Hi")
    console.log("Render")
  }

  // component without dpenency
  // use effect with return value and no dependency
  // rerendering causes component to 
  // mount and unmount
  componentWillUnmount() {
    if (this.nameTimeout != null) clearTimeout(this.nameTimeout)
    console.log("Bye")
  }

  // now do something within as the component as mounted
  componentDidUpdate(prevProps, prevState){
    console.log("Updated")

    if (
        prevState.name !== this.state.name ||
        prevState.age !== this.state.age
      ) {
        console.log(
          `My name is ${this.state.name} and I am ${this.state.age} years old`
        )
      }


      if (prevState.name !== this.state.name) {
        document.title = this.state.name
  
        if (this.nameTimeout != null) clearTimeout(this.nameTimeout)
  
        this.nameTimeout = setTimeout(() => {
          console.log(`My name is ${this.state.name}`)
        }, 1000)
      }

  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button
          onClick={() =>
            this.setState((state) => {
              return { age: state.age - 1 };
            })
          }
        >
          -
        </button>
        {this.state.age}
        <button
          onClick={() =>
            this.setState((state) => {
              return { age: state.age + 1 };
            })
          }
        >
          +
        </button>
        <br />
        <br />
        My name is {this.state.name} and I am {this.state.age} years old.
      </div>
    );
  }
}
