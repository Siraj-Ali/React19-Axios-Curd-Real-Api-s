import { useEffect, useState } from "react";
import { deletePost, getPost } from "../Api/PostApis"
import { Form } from "./Form";

export const Post = () => {
    // const posts = await 
    const [posts, setPost] = useState([]);
    const [editPostData, setEditPostData] = useState({});
    const fetchPosts = async() => {
        const {data} = await getPost();
        console.log(data);
        setPost(data);
    }
    
    useEffect(() => {
        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        try {
            const resp = await deletePost(id);
            // console.log("delete resp", resp);
            if(resp.status === 200) {
              const newData = posts.filter((post) => {
                return post.id !== id;
              })  ;
              setPost(newData);
            }
        } catch (error) {
            throw new Error("Opps! something went wrong");
        }
    }

    
    const handleEdit = (post) => setEditPostData(post);
    return (
        <>
           <section className="container">
            <div className="form text-center">
                <Form data={posts} setPost={setPost} editPostData={editPostData} setEditPostData={setEditPostData} />
            </div>
            <div className="row">
                {
                    posts.map((post) => {
                        const {id, title, body,userId} = post;
                        return(
                            <div className="col-12 col-md-4 mb-4" key={id}>
                                <div className="card" >
                                    <div className="card-body">
                                        <p className="card-title"><b>{title}</b></p>
                                        {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
                                        <p className="card-text">{body}</p>
                                        <button onClick={() => handleEdit(post)} className="card-link btn btn-success">Edit</button>
                                        <button onClick={() => handleDelete(id)} href="#" className="card-link btn btn-danger">Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
            
           </section>
        </>
    )
}