import { Component } from "react";

class Collapse extends Component {
  state = {
    showContent: false
  };

  componentDidMount() {
    if (this.props.isDesc === true) {
      this.setState({
        showContent: true
      });
    }
  }

  toggle = () => {
    this.setState({
      showContent: !this.state.showContent
    });
  };

  render() {
    return this.props.children(this.state.showContent, this.toggle);
  }
}

export default Collapse;
