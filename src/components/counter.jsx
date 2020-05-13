// shortcut imrc
// Class below will inherit methods from 'React'
//  like the React.createElemnt is used below behind the scenes
import React, {Component} from "react";
// import Counters from "./counters";

//shortcut  cc
//class has state(data) and render(UI elements)
class Counter extends Component {
  //add the stat property - stat is a special property in react that holds any data this component needs
  // state property set to = data object
  //Delete state property when we decided to make this a Controlled component
  // state = {
  //   value: this.props.counter.value,
  // };

  constructor(props) {
    super();
    console.log("Counter - Mounting Phase lifecycle hook 'constructor'");
  }
  componentDidMount() {
    console.log("Counter - Mounting Phase lifecycle hook 'componentDidMount'");
  }
  componentWillUnmount() {
    console.log(
      "Counter - Mounting Phase lifecycle hook 'componentWillUnmount'"
    );
  }

  componentDidUpdate() {
    console.log("Counter - Update Phase lifecycle hook 'componentDidUpdate'");
  }

  render() {
    console.log(
      "Counter -  (mount and/or update phase) - lifecycle hook 'render'"
    );

    const {onIncrement, onDecrement, onDelete, counter, enabled} = this.props;

    // console.log("props", this.props.counter);
    //add css classes dynamically - depending on count value
    //Had synamic classes here bloating the render() so refactored below.
    // try to keep render clean and not bloated with respoinsibilities

    return (
      //'this' refs current object

      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          {/* Reference the function - don't actually call it with"()" like in html   */}
        </div>

        <div className="col">
          <button
            // onClick={() => this.handleIncrement({id: this.props.counter.id})}
            //Change the onClick to raise event handler of counter object
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value >= 50 ? "disabled" : ""}
          >
            +
          </button>
          <button
            //Disable if counter value = 0

            // disabled={this.state.counter.filter(c => (c.value = 0))}
            // disabled
            //enabled={enabled}
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            //onClick is being raised to a method in parent
            // parent Components.jsx passed a reference to it's delete method via prop named onDelete
            //THis worked but had no ID
            //onClick={this.props.onDelete}
            //This won't work - need arrow func
            //onClick={this.props.onDelete(this.props.id)}
            // So...
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </div>
    ); // JSX expression - not string
  }

  getBadgeClasses() {
    let cssClasses = "badge m-2 ";
    cssClasses +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return cssClasses;
  }

  formatCount() {
    const {value: count} = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

//Done with this component.  Now use it (in index.js?)
