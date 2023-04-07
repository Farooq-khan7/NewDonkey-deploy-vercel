import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'



class News extends Component {
  // static defaultProps={
  //   country:"us",
  //   pageSize: 6,
  //   category: "general"
  // }
   PropTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  capatalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  constructor(props) {
    super(props);
    console.log("helo i am a constructor");

    this.state = {
      articles: [],
      loading:false,
      page: 1,
    };
    document.title=`${this.capatalizeFirstLetter(this.props.category)} - NewsDonkey`
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ba00676a552c4b9cb97cefa1af2a8c45&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles,
                    totalResults: parseData.totalResults,
                    loading:false });
  }
  handleNext = async () => {
    if(!this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ba00676a552c4b9cb97cefa1af2a8c45&page=${this.state.page + 1
  }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
      loading:false
    });
    }
  };
  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ba00676a552c4b9cb97cefa1af2a8c45&page=${this.state.page - 1
  }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading:false
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h2>News Donkey - Top Headlines</h2>
        {this.state.loading && <Spinner/>}

        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4 mt-3" key={element.url}>
                <NewsItems
                  title={
                    element.title.length >= 45
                      ? element.title.slice(0, 45) + "..."
                      : element.title
                  }
                  description={
                    element.description.length >= 88
                      ? element.description.slice(0, 88) + "..."
                      : element.description
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
          ;
          <div className="container mt-3 d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrev}
            >
              {" "}
              &larr; Previous
            </button>
            <button
              disabled={this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize)}
              type="button"
              className="btn btn-dark"
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default News;
