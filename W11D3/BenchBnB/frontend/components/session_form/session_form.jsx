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
            <div>
                <h1>Welcome</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.props.formType === 'signup' ? 'Sign Up!': 'Login!'} or {this.props.navLink}
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
                       <label>Username:
                           <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                           />
                       </label>
                        <label>Password:
                           <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>

                        <br/>

                        <button type='submit'>
                            {this.props.formType === 'signup' ? 'Sign Up!' : 'Log In!'} 
                        </button>
                    </div>                 
                </form>
            </div>
        )
    }

}

export default SessionForm;