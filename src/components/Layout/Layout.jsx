import { Header } from "./Header";
import { Outlet } from "react-router";


export const Layout = () => {
    return (
        <>
            <Header/>
            {/* {window.location.pathname.includes('/mdetail') ? <DetailLoader /> : <Loader/>} */}
            <Outlet/>
        </>
        
    )
}