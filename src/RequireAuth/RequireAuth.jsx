import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if(loading){
   return <div>Loading....</div>
  }
  if (!user) {
   return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;