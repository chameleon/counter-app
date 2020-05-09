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
  state = {
    /value: this.props.counter.value,
  };

  handleIncrement = productID => {
    this.setState({value: this.state.value + 1});
    // console.log(productID);
  };

  render() {
    console.log("props", this.props.counter);
    //add css classes dynamically - depending on count value
    //Had synamic classes here bloating the render() so refactored below.
    // try to keep render clean and not bloated with respoinsibilities

    return (
      //'this' refs current object
      //use js array method MAP to loop through tags array and map it to an LI
      <div>  
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* Reference the function - don't actually call it with"()" like in html   */}
        <button
          onClick={() => this.handleIncrement({id: this.props.counter.id})}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          //onClick is being raised to a method in parent
          // parent Components.jsx passed a reference to it's delete method via prop named onDelete
          //THis worked but had no ID
          //onClick={this.props.onDelete}
          //This won't work - need arrow func
          //onClick={this.props.onDelete(this.props.id)}
          // So...
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    ); // JSX expression - not string
  }

  getBadgeClasses() {
    let cssClasses = "badge m-2 ";
    cssClasses += this.state.value === 0 ? "badge-warning" : "badge-primary";
    return cssClasses;
  }

  formatCount() {
    const {value: count} = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

//Done with this component.  Now use it (in index.js?)
