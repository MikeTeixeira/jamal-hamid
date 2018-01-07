import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import WizardForm from '../reduxFormTest/WizardForm';

class Questionnare extends Component {
  constructor(props){
    super(props);

  }


  render() { 
    console.log(this.props.spanActive);
    return (
      <div className="form-wrapper">
        <WizardForm />
        <div className="personal-form-detail-wrapper">
          <div className="personal-form-detail__bottom">
            {/* { spanIndexs.map(val => 
              {if(val === page){
              return <span style={{color: 'blue'}} className="form-pages__span activeSpanForm">{val}</span>
              } else {
                return <span className="form-pages__span">{val}</span>
              }}
            )} */}
            
          </div>
          <div className="personal-form-detail__top">
            <h1>Tell Me About Yourself</h1>
            <p></p>
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