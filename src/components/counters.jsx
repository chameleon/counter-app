import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 44},
      {id: 3, value: 3},
      {id: 4, value: 24},
    ],
  };

  //   We should always let the CounterS component edit it's own state.
  //  so we 'raised' the event handler for counter.jsx
  handleDelete = counterId => {
    console.log("deletedd", counterId);
    // this.setState =  a whole new version of the counters array
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.handlReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter} //pass the whole object and you'll nver have to update this
            //id={counter.id}
            //value={counter.value}
            //selected //same as selected="true"
            onDelete={this.handleDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
