import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import ServicePackageItem from './ServicePackageItem';


 class Services extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      packages: []
    }
    this.loadPackagesFromServer = this.loadPackagesFromServer.bind(this);
  }

  loadPackagesFromServer(){
    axios.get('/packages')
    .then(res => {
      this.setState({packages: res.data.packages })
    });
  }

  componentDidMount(){
    this.loadPackagesFromServer();
  }

  render () {

    console.log(this.state.packages);

    return (
      <div className="services-container">
        <div className="services-wrapper" >
          <h1 className="services-header" >Select Your Plan</h1>
          {this.state.packages.map(packageItem => {
           return <ServicePackageItem {...packageItem} key={packageItem._id} />
          })}
        </div>
      </div>
    )
  }
}

export default connect()(Services);