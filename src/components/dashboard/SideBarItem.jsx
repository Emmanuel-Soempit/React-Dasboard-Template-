import React from "react";
import { useNavigate } from "react-router-dom";

function SideBarItem({data, dispatch, state}) {
   
    const navigate = useNavigate()

    const navigateToPage = () => {
        navigate(data.route)
        dispatch({...data})
    }

    return <li onClick={navigateToPage}  className={`cursor-pointer border p-2 ${state?.type === data?.type ? 'bg-blue-300' : 'bg-none'}`}>{data.title}</li>;
}

export default React.memo(SideBarItem);