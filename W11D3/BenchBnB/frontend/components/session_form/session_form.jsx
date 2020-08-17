import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(target) {
        return (e) => this.setState({[target]: e.currentTarget.value})
    }

    render() {
        return (
            <div className='modal is-open'>
                <form onSubmit={this.handleSubmit} className='modal-form'>
                    <div>
                        {/* {this.props.formType === 'signup' ? 'Sign Up!' : 'Have an Account?'} or*/} {this.props.navLink} 
                    </div>
                    <ul>
                        {this.props.errors.map((error, idx) => (
                            <li key={idx}>
                                {error}
                            </li>
                        )
                        )}
                    </ul>

                    <br/>

                    <div>
                       <label className='user'>Username:
                           <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                           />
                       </label>
                       <br/>
                        <label className='password'>Password:
                           <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>

                        <br/>
                        <br/>
                        <div className='button1'>
                            <button type='submit' className='button2' >
                                {this.props.formType === 'signup' ? 'Sign Up!' : 'Log In!'}
                            </button>
                        </div>
                    </div>                 
                </form>
                <div className='modal-screen'></div>
            </div>
        )
    }

}

export default SessionForm;