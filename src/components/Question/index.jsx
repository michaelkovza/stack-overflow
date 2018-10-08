import React, { Component } from 'react';
import showFullContent from '../../hocs/showFullContent';
import moment from 'moment';

class Question extends Component {

    renderQuestionContent = (question) => (
        <div className='question__content-container'>
            <p className='question__content'>
                Link to question:
                <a className='question__link' href={question.link} rel='noopener noreferrer' target='_blank'>
                    {question.link}
                </a>
            </p>
        </div>
    );

    render() {

        const {isOpen, toggleClick, question} = this.props;

        return (
            <li className='question'>
                <h1 onClick={ toggleClick } className='question__title'>
                    {question.title}
                </h1>
                <div className='question__stats'>
                    <p className='question__content'>View count: {question.view_count}</p>
                    <time className='question__content'>{moment.utc(question.creation_date * 1000).format('LL')}</time>
                </div>
                {isOpen && this.renderQuestionContent(question)}
            </li>
        )
    }
}

export default showFullContent(Question);
