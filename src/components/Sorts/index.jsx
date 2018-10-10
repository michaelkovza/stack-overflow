import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortByType } from "../../actions/sort-by-type";
import { CREATION_DATE, VIEW_COUNT } from "../../constants/comparatorsTypes";

class Sorts extends Component {
    render() {

        const { className } = this.props;

        return (
            <section className={`${className} sorts`}>
                <h2 className='sorts__title'>Sort by:</h2>
                <button
                    onClick={ () => this.props.sortByType(VIEW_COUNT) }
                    className='sorts__button'>
                    View
                </button>
                <button
                    onClick={ () => this.props.sortByType(CREATION_DATE) }
                    className='sorts__button'>
                    Date
                </button>
            </section>
        )
    }
}

const mapDispatchToProps = ({
    sortByType
});

export default connect(null, mapDispatchToProps)(Sorts);
