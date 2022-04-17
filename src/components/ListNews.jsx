import React from 'react';
import News from './News';
import PropTypes from 'prop-types';

const ListNews = ({ articles }) =>  ( 
    <div className="row">
        {articles.map(item => (
            <News 
                key={item.url}
                new={item}
            />
        ))}
    </div>
);

ListNews.propTypes = {
    articles : PropTypes.array.isRequired
}
 
export default ListNews;