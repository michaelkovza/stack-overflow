const comparators = {
    view_count: (a, b) => (  b['view_count'] - a['view_count'] ),
    creation_date: (a, b) =>  ( a['creation_date'] - b['creation_date'])
};

export default comparators;