import React from 'react';
import axios from 'axios';
import ServicePackageItem from './ServicePackageItem';


 export default class Services extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      packages: [],
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

    return (
      <div className="services-container">
        <div className="services-wrapper" >
          <div className="nutrition-plan-wrapper"></div>
          <h1 className="services-header" >Select Your Plan</h1>
          {this.state.packages.map(packageItem => {
           return <ServicePackageItem {...packageItem} key={packageItem._id} />
          })}
        </div>
      </div>
    )
  }
}