import { Navigate } from "react-router-dom";

function AdminRoute({auth, children}){
    return auth? children : <Navigate to="/login" />
}

export default AdminRoute;