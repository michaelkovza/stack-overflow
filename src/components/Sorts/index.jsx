import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortByAnswers, sortByDate } from "../../actions/sorts";

class Sorts extends Component {
    render() {
        return (
            <section className='filters'>
                <h2 className='filters__title'>Sort by:</h2>
                <button onClick={ () => this.props.sortByAnswers('by_answers') } className='filters__button'>Answers</button>
                <button onClick={ () => this.props.sortByAnswers('by_date') } className='filters__button'>Date</button>
            </section>
        )
    }
}

const mapDispatchToProps = ({
   sortByAnswers
});

export default connect(null, mapDispatchToProps)(Sorts);
