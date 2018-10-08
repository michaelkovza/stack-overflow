import React, { Component } from 'react';
import Question from '../Question';
import comparators from '../../utils/comparators';

class QuestionList extends Component {

    renderQuestions = (questions, sortType) => {

        if(sortType) {

            return (
                questions.sort(comparators[sortType]).map(question => <Question question={ question } />)
            )
        }

        return questions.map(question => <Question question={ question } />)
    };

    render() {

        const { questions, sortType } = this.props;

        return (
            <ul className='questions-list'>
                {questions && this.renderQuestions(questions, sortType)}
            </ul>
        )
    }
}

export default QuestionList;
