import React, { useEffect } from 'react'
import { useState } from 'react';
import PostCreateForm from './PostCreateForm';
import PostUpdateForm from './PostUpdateForm';




function RenderPostsTable({props}) {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        postId: '',
        title: '',
        content: ''
    });
    const url = 'https://localhost:7196/get-all-posts';


    
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .then((json) => console.log(json));
    }, [data]);

    const chooseData = (data) => {
        setData(data);
      };
    
  
        //delete post
        const deletePost = (post) => {
            console.log(post);
            const url = 'https://localhost:7196/delete-post-by-id/' + post.postId;
            fetch(url, {
                method: 'DELETE'
            })
                .then((response) => response.json())
                .then(responseFromServer => {
                    console.log(responseFromServer);
                    onPostDeleted(post);
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        const onPostDeleted = (post) => {
            const newPosts = data.filter((p) => p.postId !== post.postId);
            setData(newPosts);
        };
        const updatePost = (post) => {
            console.log(post);
            setFormData({
                postId: post.postId,
                title: post.title,
                content: post.content
            });
        };
        //
       //handle change for update
        const handleChange = (event) => {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            });
        }
        //handle submit for update, send edited post to server
        const handleSubmit = (event) => {
            event.preventDefault();
            const postToUpdate = {
                postId: formData.postId,
                title: formData.title,
                content: formData.content
            };
            const url = 'https://localhost:7196/update-post';
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postToUpdate)
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
                postId: '',
                title: '',
                content: ''
            });
            fetch('https://localhost:7196/get-all-posts')

                .then((response) => response.json())
                .then((json) => chooseData(json))
                .then((json) => console.log(json));
        }   
        
      
  return (
    <>
    <div className='table-responsive mt-5'>
        <table className='table table-bordered border-dark'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {data.map((post) => (
                    <tr key={post.postId}>
                        <td>{post.postId}</td>
                        <td>{post.title}</td>
                        <td>{post.content}</td>
                        <td>
                            <button className='btn btn-danger' onClick={() => deletePost(post)}>Delete</button>
                           <button className='btn btn-primary' onClick={() => updatePost(post)}>Update</button>
                        </td>
                    </tr>

                ))}
            </tbody>
        </table>
        </div>
        <PostCreateForm chooseData={chooseData}/>
        <div>
        <form>
            <h1>
                Create a post
            </h1>
            <div>
                <label htmlFor="postId">postId</label>
                <input type="text" name="postId" value={formData.postId} onChange={handleChange} />
            </div>
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
            <button onClick={() => props.onPostCreated(null)}>Cancel</button>
                </div>
       
        
        
        </>)
}

export default RenderPostsTable