import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions'

import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const mapStateToProps = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <div className='button3'> 
            <Link to='/login'>Log In Instead Stoopid</Link>
            </div>
    }
}

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);