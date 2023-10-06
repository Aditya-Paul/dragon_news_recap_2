
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { useContext } from 'react';
import { Authcontext } from '../../Provider/AuthProvider';

const Login = () => {

    const { login } = useContext(Authcontext)
    const location = useLocation();
    const Navigate = useNavigate();
    console.log('login page location', location)

    const handlelogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        //const email = e.target.email.value;
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        // console.log(form.get('email'))
        // console.log(form.get('password'))

        login(email, password)
            .then(res => {
                console.log("successfully loged", res.user)
                Navigate(location?.state? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <p className='text-3xl my-10 text-center'>PLease login</p>

                <form onSubmit={handlelogin} action="" className='md: w-3/4 lg:w-1/2 mx-auto'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='text-center mt-4'>Don`t have an account  <Link to='/register' className='text-blue-600'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;