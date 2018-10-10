import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchQuestions } from "../../actions/search-questions";

class SearchForm extends Component {

    inputRef = React.createRef();

    render() {

        const { className } = this.props;

        return (
            <form className={`${className} form`}>
                <input ref={ this.inputRef } className='form__input' type='text'/>
                <button
                    onClick={ (e) => { e.preventDefault(); this.props.searchQuestions(this.inputRef.current.value) } }
                    className='form__button'>
                    Find
                </button>
            </form>
        )
    }
}

const mapDispatchToProps =  ({
  searchQuestions
});

export default connect(null, mapDispatchToProps)(SearchForm);