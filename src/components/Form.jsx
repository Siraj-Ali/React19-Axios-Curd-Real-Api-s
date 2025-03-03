import { useEffect, useState } from "react"
import { addPost, updatePost } from "../Api/PostApis";

export const Form = ({data, setPost, editPostData, setEditPostData}) => {
    const [value, setValue] = useState({
        title: "",
        body: ""
    });
    
    const [loading, setLoading] = useState(false);
    const handleInputValue = (e) => {
        const {name, value} = e.target;
        setValue((prev) => {
           return {
            ...prev, [name]: value
           }
        })
        // console.log(value);
    }

    let isEmpty = Object.keys(editPostData).length === 0;
    console.log(isEmpty);
    
    useEffect(() =>  {
        // console.log("editPostData", editPostData);
        editPostData && setValue({
            title: editPostData.title || "",
            body: editPostData.body || ""
        })
    }, [editPostData])

    const addNewPost = async () => {
        console.log(value);
        const resp = await addPost(value);
        console.log(resp);
        if(resp.status === 201) {
            setPost([resp.data, ...data]);
            setValue({title: "", body: ""});
        }
        setLoading(false);
    }

    const editPost = async () => {
        const resp = await updatePost(editPostData.id, value);
        console.log("resp",resp);
        if(resp.status === 201 || resp.status === 200)  {
            setPost((prev) => {
                return prev.map((currentEl) => {
                   return currentEl.id === resp.data.id ? resp.data : currentEl
                })
            });
            setLoading(false);
            setValue({title: "", body: ""});
            setEditPostData({})
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // console.log("Submit ",e.nativeEvent.submitter.value);return;
        const action = e.nativeEvent.submitter.value;
        if(action === "Add") {
            addNewPost();
        }else if(action === "Edit") {
            editPost();
        }
        
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                       <div className="col mb-3">
                        {/* <label for="exampleFormControlInput1" className="form-label">Email address</label> */}
                        <input type="text" name="title" value={value.title} onChange={handleInputValue} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="col mb-3">
                        {/* <label for="exampleFormControlTextarea1" className="form-label"></label> */}
                        <input type="text" name="body" value={value.body} onChange={handleInputValue} className="form-control" placeholder="Body contents" id="exampleFormControlTextarea1" />
                       </div>
                       <div className="col mb-3 text-left" style={{textAlign: "left"}}>
                        <button className="btn btn-success" value={isEmpty ? "Add" : "Edit"}>{loading ? "Wait.." : isEmpty ? "Add" : "Edit"}</button>
                       </div>
                </div>
                
            </form>
        </>
    )
}