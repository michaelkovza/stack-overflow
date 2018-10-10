import React, {Component} from 'react';

class Pagination extends Component {

    renderItems = ( questionsLength, viewItemsCount, handleChangePaginationCurrentPage ) => (
        Array.from( { length: Math.ceil(questionsLength / viewItemsCount) }, (a, b) => b + 1).map( number => (
                <li className='pagination__item'
                    key={ number }
                    id={ number }
                    onClick={ handleChangePaginationCurrentPage }
                >
                    { number }
                </li>
            )
        ));

    render() {

        const {questionsLength, viewItemsCount, handleChangePaginationCurrentPage, className} = this.props;

        return (
            <ul className={`${className} pagination`}>
                {this.renderItems(questionsLength, viewItemsCount, handleChangePaginationCurrentPage)}
            </ul>
        )
    }
}

export default Pagination;
