import { VIEW_COUNT, CREATION_DATE } from "../constants/comparatorsTypes";

const comparators = {
    [VIEW_COUNT]: (a, b) => (  b['view_count'] - a['view_count'] ),
    [CREATION_DATE]: (a, b) =>  ( a['creation_date'] - b['creation_date'])
};

export default comparators;