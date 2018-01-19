import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions';
import axios from 'axios';
import ServicePackageItem from './ServicePackageItem';
import {loadState, saveState} from './localStorage/localStorage';


 class Services extends React.Component {
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

    const { addToCart } = this.props;
    return (
      <div className="services-container">
        <div className="services-wrapper" >
          <div className="nutrition-plan-wrapper"></div>
          <h1 className="services-header" >Select Your Plan</h1>
          {this.state.packages.map(packageItem => {
           return <ServicePackageItem handleAddToCart={addToCart} {...packageItem} key={packageItem._id} />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Services);