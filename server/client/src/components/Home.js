import React, {Component} from 'react';

class Home extends Component{
  constructor(props){
    super(props);
  }


  render() {
    const { logoTitle } = this.props;
    return (
      <div>
        {console.log(this.props.logoTitle)}
      </div>
    )
  }
}

export default Home
