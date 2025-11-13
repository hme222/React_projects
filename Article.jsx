import React from 'react'

const Article = ({content}) => {
  return (
    <> 
   <div className="article col-4">
      <img className="img-fluid" src={content.img} alt="featured" />
      <h2> {content.title} </h2>
      <p> {content.body} </p>
    </div>
     </>
  )
}

export default Article