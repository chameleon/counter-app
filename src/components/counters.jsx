import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter} //pass the whole object and you'll never have to update this
            //id={counter.id}
            //value={counter.value}
            //selected //same as selected="true"
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
