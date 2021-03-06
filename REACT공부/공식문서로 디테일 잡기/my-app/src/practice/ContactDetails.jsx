import React, { Component } from 'react'

export default class ContactDetails extends Component {
    render() {

        const details = (
            <div>
            <p>{this.props.contact.name}</p>
            <p>{this.props.contact.phone}</p>
                Selected
            </div>
        );
        
        const blank = (<div>Not Selected</div>);

        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? details : blank}
            </div>
        )
    }
}

ContactDetails.defaultProps= {
    contact : {
        name: '',
        phone: ''
    }
}
