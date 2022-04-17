import React from 'react'
import News from './News'
import PropTypes from 'prop-types';

const ListNews = ({articles}) => {
  return (
    <div className="row">
        {articles.map((article) =>(
            <News key={article.url} article={article} />
        ))}
    </div>
  )
}

ListNews.propTypes = {
  articles : PropTypes.array.isRequired
}

export default ListNews