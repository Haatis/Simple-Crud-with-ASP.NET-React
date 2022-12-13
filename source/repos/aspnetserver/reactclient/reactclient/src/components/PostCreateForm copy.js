import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function PostUpdateForm({chooseData} ,props) {
    const [formData, setFormData] = useState({
        title: props.post.title,
        content: props.post.content
    });
    const [data, setData] = useState([]);
    


    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const postToUpdate = {
            postId: props.post.postId,
            title: formData.title,
            content: formData.content       
    };
    const url = 'https://localhost:7196/update-post';

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postToCreate)
    })
        .then((response) => response.json())
        .then(responseFromServer => {
            console.log(responseFromServer);
            props.onPostUpdated(responseFromServer);
        })
        .catch((error) => {
            console.error(error);
        });
       //reset form
        setFormData({
            title: '',
            content: ''
        });
        fetch('https://localhost:7196/get-all-posts')
            .then((response) => response.json())
            .then((json) => chooseData(json))
            .then((json) => console.log(json));
    };

  return (
    <div>
        <form>
            <h1>
                updating a post
            </h1>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="content">content</label>
                <input type="text" name="content" value={formData.content} onChange={handleChange} />
            </div>
            </form>
            <button onClick={handleSubmit}>submit</button>
            <button onClick={() => props.onPostUpdated(null)}>Cancel</button>
                </div>
  )
}
