import React from 'react'
import Article from './Article'

const ArticleList = ({articles}) => {
    return (
    <> 
     <div className="row">
	  {articles.map((oneArticle) => (
		<Article key={oneArticle.id} content={oneArticle} />
	  ))}
     </div>
         </>)
}
// applying the article component styling to the props 
// component is reuseable, in order to apply styling to everything 
// (array of articles.map)
// take in all individual articles, using component for each individual articles in app.jsx
// when we pass in the data within the map, we apply the styling, aka props 
//aka data 

/// *** Best way to explain 
//map goes through every element in the Articles array, then displays 
//the data within the array 

// content props will be passing through 
//content or in my example articles, is the access of the let articles in app.jsx

export default ArticleList 