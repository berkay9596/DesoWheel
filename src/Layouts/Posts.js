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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [public_key])

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>  {public_key ? < div className="container d-flex align-items-center justify-content-center" style={{ height: "100vh", flexWrap: "wrap", marginTop: "5rem" }
        }>
            <h2>You can simply click on the buttons to make a draw among the post that you clicked.</h2>
            {
                state?.info?.UserPosts?.Posts?.map((post, index) =>
                    <div key={index}>
                        <div className="card" style={{ width: "60vw" }}>
                            <div className="card-body">
                                <img src={state?.info?.ProfilePicture} alt="Profile" style={{ width: "40px", borderRadius: "20px" }} /><span style={{ fontWeight: "bold" }}> {state?.info?.UserName}</span>
                                <p className="card-text">{post?.Body}</p>
                                <a href="/posts" className="btn btn-primary mx-1">Reposts ({post?.RecloutCount}) </a>
                                <a href="/posts" className="btn btn-danger">Likes  ({post?.LikeCount})</a>
                            </div>
                        </div>
                    </div>)
            }
        </div > : <h1> Sign in to see your posts here..</h1>}
        </div>
    )
}


export default Posts;