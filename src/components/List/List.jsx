import React from 'react'
import "./List.css"

const List = ({posts}) => {
  return (
    <div className='list'>
        {posts.map(post => (
      <div className='list-item' key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))}
    </div>
  )
}

export default List