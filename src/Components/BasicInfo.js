import { useSelector } from "react-redux";

const BasicInfo = () => {
    const public_key = localStorage.getItem('publicKey');
    const state = useSelector(state => state.info);

    return (
        <>

            {public_key ? <div className="dropdown">
                <a
                    className="dropdown-toggle text-info text-decoration-none"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    href="/"
                >
                    {state?.info?.UserName}{" "}
                    <img
                        src={state?.info?.ProfilePicture}
                        className="rounded-circle"
                        alt="Profil resmi"
                        width="32px"
                    />
                </a>
                <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                >
                    <li>
                        <a onClick={() => localStorage.removeItem('publicKey')} className="dropdown-item" href="/">
                            Logout
                        </a>
                    </li>
                </ul>
            </div> : ""}


        </>
    )
}




export default BasicInfo;