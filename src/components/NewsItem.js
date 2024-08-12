import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title, description, imgUrl, newsUrl, author, date}=this.props;
    return (
        <div className='my-3'>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={!imgUrl?'https://demofree.sirv.com/nope-not-here.jpg':imgUrl} alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className='text-muted'>By {!author? 'Unknown':author} at {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-danger">View News</a>
                </div>
            </div>
        </div>
    )
  }
}

export default NewsItem