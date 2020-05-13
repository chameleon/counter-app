import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor(props) {
    //Constructor is the right place to initialize the properties in this class - like State
    super();
    console.log("Counters - Mouning phase lifecycle hook 'constructor'");
  }
  componentDidMount() {
    console.log("Counters - Mounting phase lifecycle hook 'componentDidMount'");
  }

  render() {
    console.log("Counters - Mount or Update phase  lifecycle hook 'render'");

    //Destructure (or contextualize) the props object to pick the properties we need - cleaner code
    const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props;
    // Now we cn remove all the [this.props] prefixes

    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter} //pass the whole object and you'll never have to update this
            //id={counter.id}
            //value={counter.value}
            //selected //same as selected="true"
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
