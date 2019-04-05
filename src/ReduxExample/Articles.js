import React, { Component } from 'react';
import Article from './Article';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { articles: state.articles }
}

const ConnectedArticles = ({ articles }) => {

    return (
        <ul>
            {articles.map((a) => 
                <Article key={a.id} title={a.title} />
            )}
        </ul>
    )
}

const Articles = connect(mapStateToProps)(ConnectedArticles);

export default Articles;