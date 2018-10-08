import React, { Component } from 'react';

export default (OriginalComponent) => class ShowFullContent extends Component {
    state = {
        isOpen: false
    };

    toggleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };


    render() {
        return (
            <OriginalComponent
                {...this.state}
                {...this.props}
                toggleClick={this.toggleClick}
            />
        )
    }
}
