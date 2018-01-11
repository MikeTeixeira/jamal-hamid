import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import WizardForm from '../servicesWizardForm/WizardForm';

class Questionnare extends Component {
  constructor(props){
    super(props);

  }
  render() { 

    const { spanActive } = this.props;
    const pageHeaders = ['Tell Me About Yourself', "So what's your day like?", "Testing 3", "Testing 4", "Testing 5"];
    const pageDescription = 
    ["Giving me your basic information allows us to stay in contact.",
    "testing page 2","testing page 3","testing page 4", "testing 5th page"];
    const spanPages = [1,2,3,4,5];

    return (
      <div className="form-background">
        <div className="form-wrapper">
          <WizardForm />
          <div className="wizard-form-detail-wrapper">
            <div className="wizard-form-detail__bottom">
              {spanPages.map(val =>
                val === spanActive ?
                <span style={{color: 'blue'}} className=" standardClass  active">{val}</span> : 
                <span className=" standardClass">{val}</span>           
              )}            
            </div>
            <div className="wizard-form-detail__top">
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