import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../../components/Search-form';
import Sorts from '../../components/Sorts';
import QuestionsList from '../../components/Questions-list';

class Main extends Component {

    render() {

        const { questions } = this.props;

        return (
            <section className='main'>
                <SearchForm/>
                {questions && <Sorts questions={ questions } /> }
                <QuestionsList questions={ questions }/>
            </section>
        )
    }
}

const mapStateToProps = ({ searchQuestions }) => {
    return {
        questions: searchQuestions.questions
    }
};

export default connect(mapStateToProps, null)(Main);
