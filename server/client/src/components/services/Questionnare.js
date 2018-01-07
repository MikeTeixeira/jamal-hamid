import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import WizardForm from '../servicesWizardForm/WizardForm';

class Questionnare extends Component {
  constructor(props){
    super(props);

  }
  render() { 
    console.log(this.props.spanActive);
    const { spanActive } = this.props;
    const pageHeaders = ['Tell Me About Yourself', "Testing 2", "Testing 3", "Testing 4"];
    const pageDescription = ["testing page 1","testing page 2","testing page 3","testing page 4"];
    const spanPages = [1,2,3,4];
    return (
      <div className="form-wrapper">
        <WizardForm />
        <div className="personal-form-detail-wrapper">
          <div className="personal-form-detail__bottom">
            {spanPages.map(val =>
              val === spanActive ?
              <span style={{color: 'blue'}} className=" standardClass  active">{val}</span> : 
              <span className=" standardClass">{val}</span>           
            )}            
          </div>
          <div className="personal-form-detail__top">
            {pageHeaders.map((header, index) =>
              index === spanActive - 1 ? 
              <div>
                <h1>{header}</h1> 
                <p>{pageDescription[index]}</p>
              </div> : null
            )}           
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    spanActive: state.formActive
  }
}

export default connect(mapStateToProps)(Questionnare);