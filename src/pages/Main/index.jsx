import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchForm from '../../components/Search-form';
import Sorts from '../../components/Sorts';
import QuestionsList from '../../components/Questions-list';
import Pagination from '../../components/Pagination';

const uuidv1 = require('uuid/v1');

class Main extends Component {

    state = {
        questionsLength: null,
        currentPage: 1,
        viewItemsCount: 20
    };

    handleChangePaginationCurrentPage = event => {
        this.setState({
            currentPage: Number(event.target.id)
        })
    };

    renderQuestionsContent = (questions, currentQuestions, sortType, questionsLength, viewItemsCount, handleChangePaginationCurrentPage) => {
        return [
            <Sorts
                className='main__sorts'
                key={ uuidv1() }
                questions={ questions }
            />,
            <QuestionsList
                className='main__questions-list'
                key={ uuidv1() }
                sortType={ sortType }
                questions={ currentQuestions }/>,
            <Pagination
                className='main__pagination'
                key={ uuidv1() }
                handleChangePaginationCurrentPage={ handleChangePaginationCurrentPage }
                questionsLength={ questionsLength }
                viewItemsCount={ viewItemsCount }
            />
        ]
    };

    static getDerivedStateFromProps(props, state) {

        if (!props.questions) {
            return null;
        }

        if (props.questions.length !== state.questionsLength) {
            return {questionsLength: props.questions.length}
        }
        return null;
    }

    render() {

        const { currentPage, viewItemsCount, questionsLength } = this.state;
        const { questions, sortType } = this.props;

        const indexOfLastItem = currentPage * viewItemsCount;
        const indexOfFirstItem = indexOfLastItem - viewItemsCount;
        let currentQuestions = [];

        if (questions) {
            currentQuestions = questions.slice(indexOfFirstItem, indexOfLastItem);
        }

        return (
            <section className='main'>
                <SearchForm className='main__form'/>
                {questions && this.renderQuestionsContent(questions, currentQuestions, sortType, questionsLength, viewItemsCount, this.handleChangePaginationCurrentPage)}
            </section>
        )
    }
}

const mapStateToProps = ({searchQuestions, sortType}) => {
    return {
        questions: searchQuestions.questions,
        sortType: sortType
    }
};

export default connect(mapStateToProps, null)(Main);
