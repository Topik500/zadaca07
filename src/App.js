import React from 'react';
import { UserChildren, UserClass, UserFunction} from './user';

export default class App extends React.Component {
  state = {
    users: [
      { name: 'Ivan', years: 30 },
      { name: 'Marko', years: 35 },
      { name: 'Ana', years: 25 },
    ],
    children: 'A hobi mi je plivanje.',
    newUser: ''
  };

  handleButtonPress = () => {
    const { users } = this.state;

    const newUsers = users.map(user => {
      return { ...user, years: user.years + 1 };
    });

    this.setState({ users: newUsers });
  };

  handleChange = (event) => {
    console.log(event.target.value);

    this.setState({ newUser: event.target.value });
  }

  render() {
    const { users, children } = this.state;

    return (
      <div>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <button onClick={this.handleButtonPress}>Promjena godina</button>
        <UserFunction name={users[0].name} years={users[0].years} />
        <UserFunction name={users[1].name} years={users[1].years} />
        <UserClass name={users[2].name} years={users[2].years} />
        <UserChildren name={this.state.newUser} years={users[2].years}>
          {children}
        </UserChildren>
          <input name="firstName" onChange={this.handleChange}/>
      </div>
    );
  }
}
