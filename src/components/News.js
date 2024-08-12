import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner2';

export class News extends Component{

    
    capitalizeFirstLetter= (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    updateTitle(){
        
        document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsFox`;
    }
    constructor(props){
        super(props);
        this.state={
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    async componentDidMount(){
        this.fetchArticles();
    }

    async componentDidUpdate(prevProps) {
        // Fetch new articles if the category prop has changed
        if (prevProps.category !== this.props.category) {
            this.setState({ page: 1 }, this.fetchArticles);
            this.updateTitle();
        }
    }

    fetchArticles = async () => {
        const { category } = this.props;
        const { page } = this.state;
        const url = `https://newsapi.org/v2/top-headlines?q=${category}&apiKey=8a333109df7045e4b0d4dbf0b1b9d221&page=${page}&pageSize=${this.props.pageNo}`;
        
        this.setState({ loading: true });
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({
            articles: parsedData.articles || [],
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    handlePrevClick = async () => {
        this.setState(
            prevState => ({ page: prevState.page - 1 }),
            this.fetchArticles
        );
    }

    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageNo))) {
            this.setState(
                prevState => ({ page: prevState.page + 1 }),
                this.fetchArticles
            );
        }
    }

    render() {
        return (
            <div className='container my-4'>
                <h1 className="text-center" style={{ margin: '40px' }}>NewsFox - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row mt-4">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem
                                title={element.title ? element.title.slice(0, 45) : ""}
                                description={element.description ? element.description.slice(0, 88) : ""}
                                imgUrl={element.urlToImage}
                                newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                            />
                        </div>
                    })}
                </div>

                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-success" onClick={this.handlePrevClick}>&larr; Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageNo)} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News;
