import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getInfo } from '../redux/actions/userInfoActions'
import { TailSpin } from "react-loader-spinner";

const Posts = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const state = useSelector(state => state.info)
    const public_key = localStorage.getItem('publicKey');
    const headers = {
        public_key: public_key,
    };
    useEffect(() => {
        dispatch(getInfo(headers))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [public_key])

    useEffect(() => {
        if (state?.info?.UserPosts?.Posts) {
            setLoading(false)
        }
        if (!state?.info?.UserPosts?.Posts) {
            return setLoading(true)
        }
    }, [state])
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            < div className="container d-flex align-items-center justify-content-center" style={{ height: "100vh", flexWrap: "wrap", marginTop: "5rem" }}>
                {loading ? <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                    }}
                >
                    <TailSpin heigth="100" width="100" color="red" ariaLabel="loading" />
                </div> : <>
                    <h2>You can simply click on the buttons to make a draw among the post that you clicked.</h2>
                    {state?.info?.UserPosts?.Posts?.map((post, index) =>
                        <div key={index}>
                            <div className="card" style={{ width: "60vw" }}>
                                <div className="card-body">
                                    <img src={state?.info?.ProfilePicture} alt="Profile" style={{ width: "40px", borderRadius: "20px" }} /><span style={{ fontWeight: "bold" }}> {state?.info?.UserName}</span>
                                    <p className="card-text">{post?.Body}</p>
                                    <a href="/posts" className="btn btn-primary mx-1">Reposts ({post?.RecloutCount}) </a>
                                    <a href="/posts" className="btn btn-danger">Likes  ({post?.LikeCount})</a>
                                </div>
                            </div>
                        </div>
                    )}

                </>
                }
            </div>
        </div>
    )
}


export default Posts;