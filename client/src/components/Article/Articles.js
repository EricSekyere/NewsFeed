import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getArticles, getSourceArticles} from '../../store/actions/article'
import './Articles.css';

class Articles extends Component {

  static propTypes = {
    getArticles: PropTypes.func.isRequired,
    getSourceArticles:PropTypes.func.isRequired,
    articles: PropTypes.array.isRequired
  }

  static defaultProps = {
    articles: []
  }

  componentWillMount() {
    this.props.getArticles();
  }

  render() {

    return (
      <div  id = "article-wrapper">
        <h2>Articles</h2>
        <div className="card-columns">
        {this.props.articles.map(article =>
          <React.Fragment key={article.id}>
          <div key className="card">
          <img className="card-img-top" src={article.urlToImage} />
                <div className="card-body">
                <h4 className="card-title">{article.title}</h4>
                <p className="card-text">{article.publishedAt}</p>
                <p className="card-text">{article.author}</p>
                <a href={article.url} className="btn btn-primary btn-lg art-url" target="_blank">Click to article</a>
              </div>
          </div>
          </React.Fragment>
        )}
        </div>
      </div>
    );//end return
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles
})

const dispatchToProps = (dispatch) => ({
   getArticles: () => dispatch(getArticles())
})

export default connect(mapStateToProps, dispatchToProps)(Articles);
