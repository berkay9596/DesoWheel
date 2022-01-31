import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getInfo } from '../redux/actions/userInfoActions'

const Posts = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.info)
    const public_key = localStorage.getItem('publicKey');
    const headers = {
        public_key: public_key,
    };
    console.log("state", state)
    useEffect(() => {
        dispatch(getInfo(headers))
    }, [public_key])

    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ height: "100vh", flexWrap: "wrap", marginTop: "5rem" }}>
            {state?.info?.UserPosts?.Posts?.map((post, index) =>
                <div key={index}>
                    <div className="card" style={{ width: "60vw" }}>
                        <div className="card-body">
                            {/* <h5 className="card-title">Post {index + 1}</h5> */}
                            <img src={state?.info?.ProfilePicture} style={{ width: "40px", borderRadius: "20px" }} /><span style={{ fontWeight: "bold" }}> {state?.info?.UserName}</span>
                            <p className="card-text">{post?.Body}</p>
                            <a href="#" className="btn btn-primary mx-1">Reposts ({post?.RecloutCount}) </a>
                            <a href="#" className="btn btn-danger">Likes  ({post?.LikeCount})</a>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}


export default Posts;