import React, {useEffect, useState} from 'react';

import NewsItem from './NewsItem';
import Spinner2 from './Spinner2';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsFox`;
        updateNews(); 
        // eslint-disable-next-line
    }, [props.category, page]);
    
    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?q=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageNo}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?q=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageNo}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
    };

    return (
        <>
            <h1 className="text-center" style={{ margin: '40px', marginTop:'90px' }}>NewsFox - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner2 />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner2 />}
            >
                <div className='container'>
                    <div className="row mt-4">
                        {articles.map((element, index) => (
                            <div className="col-md-4 col-sm-12" key={`${element.url}-${index}`}>
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 45) : ""}
                                    description={element.description ? element.description.slice(0, 88) : ""}
                                    imgUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
};

export default News;
