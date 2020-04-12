import React, { Fragment, Component } from 'react';
import { UserInput } from './UserInput';
import contextAPI from './contextAPI';

class App extends Component {
  state = { userTyped: 'Sakti', counter: 0 };
  inputElRef = React.createRef();
  howManyTimes = ['Y'];

  componentDidMount() {
    console.log("Inside Component Did Mount");
    console.log(this.inputElRef);
    this.inputElRef.current.focus();
  }

  onuserTyped = (userValue) => {
    console.log(userValue.target.value);
    this.howManyTimes[0] = userValue.target.value;
    console.log(this.howManyTimes);
    this.setState((prevState, props) => {
      return { counter: prevState.counter + 1 };
    });
  };

  render() {
    return (
      <Fragment>
        <contextAPI.Provider value={{onuserTyped: this.onuserTyped, userTyped:this.state.userTyped, counter: this.state.counter}}>
          What you have typed? {this.state.userTyped}

          <UserInput/>
          <input type="text" ref={this.inputElRef} name="Parent Text" placeholder="Type Something here..." />
          Counter : {this.state.counter}
        </contextAPI.Provider>

      </Fragment>
    );
  }
}

export default App;
