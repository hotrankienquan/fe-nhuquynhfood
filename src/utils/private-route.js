import { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { Context } from '../context/Context.js';

export default function PrivateRoute({ children }) {
  const { user } = useContext(Context);
  const isValidAdmin = user && user.rows2 && user.rows2[0].fk_id_type_account == '72b0ed22-9d64-4bf2-9708-35ea731dc1bb';
  return isValidAdmin ? <>{children}</> : <Navigate to="/" />;
}
