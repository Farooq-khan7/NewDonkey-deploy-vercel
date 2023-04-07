import React, { Component } from 'react'

 class NewsItems extends Component {
 
  render() {
    let {title, description,imgUrl,newsUrl, author, date,source} = this.props;
    return (
      <div>
        <span className="badge badge-pill badge-danger" style={{color:"black", backgroundColor:"red"}} >{source}</span>
        <div className="card" style={{width: "18rem"}}>
        
            <img src={!imgUrl?"https://i.pinimg.com/originals/be/cb/ca/becbca09cc81c9ecd1ce133c836b3f25.gif":imgUrl} style={{height:"150px"}} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" className='btn btn-sm btn-dark'>Read More</a>
            </div>
           </div> 
      </div>
    )
  }
}
export default NewsItems;
