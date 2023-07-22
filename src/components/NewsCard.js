import React from 'react'

const NewsCard = ({article}) => {
  return (
    <div className="news-card">
        <h1>{article.title}</h1>
        <button style={{backgroundColor:"orange" ,color:"white",padding:"10px",borderRadius:"5px" }}><a style={{textDecoration:"none",color:"white",fontWeight:"700"}} href={article.url}>Read More</a></button>
    </div>
  )
};

export default NewsCard;