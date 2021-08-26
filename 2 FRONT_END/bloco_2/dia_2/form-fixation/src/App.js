import React from 'react';
import MyInput from './MyInput';

class App extends React.Component {
      constructor(props) {
          super(props);
          this.handleInputChange = this.handleInputChange.bind(this);
          this.state = {
                  firstName: '',
                  lastName: '',
                  email: '',
                  checkbox: '',
          }
      }

      handleInputChange({ target }) {
        const { name, value } = target
        this.setState({
          [name]: value,
        })
    }

      render() {
          return (
              <form action="/survey/new" method="post">
                 <MyInput handleInput={ this.handleInputChange }/>
              </form>
          )}
  }

export default App;
