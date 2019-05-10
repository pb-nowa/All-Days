import React from 'react';

class Shoe extends React.Component {
    constructor(props){
        super(props);
    }

    // componentDidMount(){
    //     const id = this.props.match.params.id;
    //     this.props.fetchShoe(id).then( data => {
    //         this.setState({
    //             shoe: Object.values(data.shoe),
    //         });
    //     });
    // }

    render(){
        return(

            <div>
                this is shoe
            </div>
        );

    }
}

export default Shoe;