import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortByType } from "../../actions/sort-by-type";

class Sorts extends Component {
    render() {
        return (
            <section className='filters'>
                <h2 className='filters__title'>Sort by:</h2>
                <button onClick={ () => this.props.sortByType('view_count') } className='filters__button'>View</button>
                <button onClick={ () => this.props.sortByType('creation_date') } className='filters__button'>Date</button>
            </section>
        )
    }
}

const mapDispatchToProps = ({
    sortByType
});

export default connect(null, mapDispatchToProps)(Sorts);
