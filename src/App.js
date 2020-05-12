import React, {Component} from "react";

// import React from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 44},
      {id: 3, value: 3},
      {id: 4, value: 24},
    ],
  };

  //   We should always let the CounterS component edit it's own state.
  //  so we 'raised' the event handler from counter.jsx
  handleDelete = counterId => {
    console.log("deletedd", counterId);
    // this.setState =  a whole new version of the counters array with item deleted
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({counters});
    // console.log(counters);
  };
  //A whole object [counter] is passed into this.
  handleIncrement = counter => {
    // Test the plumbing
    // this.setState({value: this.state.value + 1});

    // setState after creating a new counters object with item incremented
    // First, clone the entire counters array from state with the spread operator
    const counters = [...this.state.counters];

    // Glean the index of the item we want from the index of the object passed in
    // (why not just change the obeject passed in?)  Maybe best practice b/c we passed whole object regardless
    const index = counters.indexOf(counter);

    // clone that array item in the state array that matches the index we have
    // counters[index] = {...counter}; // IS THIS NEEDED?

    // Increment the value of the value property in our clone of that specific item
    counters[index].value++;
    // console.log(this.state.counters[index]);

    //Set state array equal to our cloned and modified array of the same name [counters]
    this.setState({counters});
    console.log(counters);
  };

  //If this sets State here in this component, then the state of the individual counter components
  // is not affected and that is two truths.
  // So we make the child Counter component a 'Controlled' component that has no state-
  //rather, it gets alll data from parent Counters comp.
  // So let's have this event handler ...
  handleReset = () => {
    console.log("reset");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  };

  render() {
    return (
      <>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            //If
            // enabled={this.state.counters.filter(c => c.value > 0)}
            enabled="false"
          />
        </main>
      </>
    );
  }
}

export default App;

// function App() {
//   return;
//   <NavBar />;
// }

// export default App;
