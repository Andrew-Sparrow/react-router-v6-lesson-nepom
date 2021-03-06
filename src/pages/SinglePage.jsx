import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'


const Singlepage = () => {
  const {id} = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((result) => result.json())
      .then((data) => setPost(data))
  }, [id])

  return (
    <div>
      {post && (
        <> 
          <h1>
            {post.title}
          </h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit post</Link>
        </>
      )}
    </div>
  )
}

export default Singlepage