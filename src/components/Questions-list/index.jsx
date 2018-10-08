import React, { Component } from 'react';

import Question from '../Question';

class QuestionList extends Component {

    renderQuestions = questions => questions.map(question => <Question question={ question }/>);

    render() {

        const { questions } = this.props;

        return (
            <ul className='questions-list'>
                {questions && this.renderQuestions(questions)}
            </ul>
        )
    }
}

export default QuestionList;
