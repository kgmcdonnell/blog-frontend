import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function BlogShowPage() {
  const params = useParams();
  const [post, setPost] = useState({});

  const handleShowPost = () => {
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then((response) => {
      setPost(response.data);
    });
  };

  useEffect(handleShowPost, []);

  return (
    <div id="blog-show">
      <h3>{post.title}</h3>
      <img src={post.image} />
      <p>{post.body}</p>
    </div>
  );
}
