import React, { useEffect, useState } from 'react';
import { userGetURL } from '../Utility/Constant';
import axios from 'axios';
import { useNavigate , Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../Store/userSlice';

const AuthWrapper = ({ children }) => {
  const [isLoading, setLoading] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let user = useSelector((store) => store.user.user);

  console.log("user " , user )

  const authenticateUser = async () => {
    try {
      setLoading(true);
      let response = await axios.get(userGetURL, { withCredentials: true });

      if (response?.data?.result === true) {
       
        dispatch(addUser(response.data.data));
      } else {
        navigate('/');
      }
    } catch (err) {
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  if (isLoading) {
    return <div>Loading the component...</div>;
  } else {
    return user ? children : <Navigate to="/" />;
  }
};

export default AuthWrapper;
