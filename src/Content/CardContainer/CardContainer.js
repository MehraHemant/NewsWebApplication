import React from 'react'
import { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'
import PropTypes from 'prop-types'
import './CardContainer.css'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function CardContainer(props) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async () => {
        props.setProgress(0)
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        document.title = 'NewsDaily - ' + capitalizeFirstLetter(props.category);
        props.setProgress(30)
        let data = await fetch(url);
        props.setProgress(50)
        let parseData = await data.json()
        props.setProgress(80)
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    useEffect(() => {
        updateNews();
    }, [])
    
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api}&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page + 1);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));
    }
    
    return (
        <>
            <h1 className={`cardContainer-heading ${props.mode}`}>Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <h4 className='loading'>Loading....</h4>}
            <div id='cardContainer'>
                <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} >
                    <div className='cardContainer-flex'>
                        {articles.map((element) => {
                            return <div className='' key={element.url}>
                                <Cards mode={props.mode} url={element.urlToImage? element.urlToImage:''} heading={element.title ? element.title : ""} desc={element.description ? element.description : ""} author={element.author ? element.author : 'unknown'} date={element.publishedAt ? element.publishedAt : "unknown"} newsUrl = {element.url} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}
CardContainer.propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
    api: PropTypes.string
}
CardContainer.defaultProps = {
    category: '',
    pageSize: 14,
    api: '6101f5873a7244898438dafb45d18741'
}
