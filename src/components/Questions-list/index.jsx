import React, { Component } from 'react';
import Question from '../Question';
import comparators from '../../utils/comparators';

const uuidv1 = require('uuid/v1');

class QuestionList extends Component {

    renderQuestions = (questions, sortType) => {

        if(sortType) {

            return (
                questions.sort(comparators[sortType])
                    .map(question => <Question key={ uuidv1() } question={ question } />)
            )
        }

        return questions.map(question => <Question key={ uuidv1() } question={ question } />)
    };

    render() {

        const { questions, sortType, className } = this.props;

        return (
            <ul className={`${className} questions-list`}>
                {questions && this.renderQuestions(questions, sortType)}
            </ul>
        )
    }
}

export default QuestionList;
