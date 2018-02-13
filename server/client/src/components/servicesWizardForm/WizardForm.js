import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions';
import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormSecondPage from './WizardFormSecondPage'
import WizardFormThirdPage from './WizardFormThirdPage'
import WizardFormFourthPage from './WizardFormFourthPage';
import WizardFormFifthPage from './WizardFormFifthPage';
import { nextPage, previousPage } from '../../actions';

class WizardForm extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    const {onSubmit, pages} = this.props;
    return (
      <div>
        {pages === 1 && <WizardFormFirstPage onSubmit={nextPage}/>}
        {pages === 2 && <WizardFormSecondPage previousPage={previousPage} onSubmit={nextPage}/>}
        {pages === 3 && <WizardFormThirdPage previousPage={previousPage} onSubmit={nextPage}/>}
        {pages === 4 && <WizardFormFourthPage previousPage={previousPage} onSubmit={nextPage} />}
        {pages === 5 && <WizardFormFifthPage previousPage={previousPage} onSubmit={nextPage} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.formActive
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardForm);