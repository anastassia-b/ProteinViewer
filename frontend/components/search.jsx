import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }

  update(field) {
    console.log(this.state);
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = this.state.id;
    const exists = this.props.proteinIds.indexOf(id);

    if (exists === -1) {
      this.props.requestProtein(id);
    } else {
      console.log("Already in state!");
      const protein = this.props.proteins[id];
      this.props.receiveProtein(protein);
    }
    this.setState({id: ''});
  }

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit.bind(this)}>
        <input onChange={this.update("id")} value={this.state.id} placeholder="Search"></input>
      </form>
    )
  }
}
