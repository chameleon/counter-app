// shortcut imrc
// Class below will inherit methods from 'React'
//  like the React.createElemnt is used below behind the scenes
import React, {Component} from "react";

//shortcut  cc
//class has state(data) and render(UI elements)
class Counter extends Component {
  //add the stat property - stat is a special property in react that holds any data this component needs
  // state property set to = data object
  state = {
    value: this.props.value,
  };

  handleIncrement = (productID) => {
    this.setState({value: this.state.value + 1});
    console.log(productID);
  };

  render() {
    console.log("props", this.props);
    //add css classes dynamically - depending on count value
    //Had synamic classes here bloating the render() so refactored below.
    // try to keep render clean and not bloated with respoinsibilities.
    return (
      //'this' refs current object
      //use js array method MAP to loop through tags array and map it to an LI
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* Reference the function - don't actually call it with"()" like in html   */}
        <button
          onClick={() => this.handleIncrement({id: 1})}
          className="btn btn-secondary btn-sm"
        >
          Increment
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
