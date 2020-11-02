import React, {  useState } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Dialog, DialogTitle, Button, DialogContent } from '@material-ui/core';
import axios from 'axios';
import { setUserSession } from '../Utils/Common';
function Navbar(props: any) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
// handle button click of login form
const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).
    then(response => {
        (response.status === 200) && props.history.push('/')
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      
       
    }).catch(error => {
      setLoading(false);
      if (error.response === 401) setError(error.response.data.message);
      
    });
  }


    const handleClose = () => {
        setIsLogin(false);
    }

    const handleOpen = () => {
        setIsLogin(true);
    }
    const handleToggle = () => {
        setIsOpen(true);
    }


    return (
        <>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">

                        <Link to="/">
                            <h4>Play Fit</h4>
                        </Link>
                        <button type="button" className="nav-btn" onClick={handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/rooms">Courts Available</Link></li>
                        <li><Link to="/rooms">Partner with Us</Link></li>
                    </ul>

                    <ul className="nav nav-links navbar-nav navbar-right" style={{ position: 'absolute', top: '15px', right: '15px' }}>
                        <li><Button variant="contained" color="primary" onClick={handleOpen}>Login</Button></li>
                    </ul>
                </div>
            </nav>
            {isLogin && <Dialog onClose={handleClose} open={isLogin}>
                <DialogTitle id="simple-dialog-title"></DialogTitle>
                <DialogContent>
                    <div className="modal-body">
                        <form>
                            <h3>Sign In</h3>

                            <div className="form-group">
                                <label> UserName</label>
                                <input type="text" {...username} autoComplete="new-password" className="form-control" placeholder="Enter username" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password"  {...password} autoComplete="new-password" className="form-control" placeholder="Enter password" />
                            </div>

                            
                            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                             <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} />
                            
                        </form>
                    </div>
                </DialogContent>
            </Dialog>}
        </>
    )
}
const useFormInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);
  
    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }
  
export default Navbar;