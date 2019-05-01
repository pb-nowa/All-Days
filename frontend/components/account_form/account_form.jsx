import React from 'react';

class AccountForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
        };
    }    



    render(){
        return(
            <div>this is the form</div>
        )
    }
}

export default AccountForm;