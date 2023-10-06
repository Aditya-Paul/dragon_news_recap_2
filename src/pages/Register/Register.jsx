import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { Authcontext } from "../../Provider/AuthProvider";
import { Result } from "postcss";


const Register = () => {
    const {createUser} = useContext(Authcontext)

    

    const handleRegister = e => {
        e.preventDefault();
        //console.log(e.currentTarget)
        //const email = e.target.email.value;
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')
        const Photo_url = form.get('photo')
        console.log(email,password,name,Photo_url)

        //create user
        createUser(email,password)
        .then(res =>{
            console.log(res.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <p className='text-3xl my-10 text-center'>PLease Register</p>

                <form onSubmit={handleRegister} action="" className='md: w-3/4 lg:w-1/2 mx-auto'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name='name' placeholder="name" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo url" className="input input-bordered"  />
                    </div>
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
                        <button  className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className='text-center mt-4'>Don`t have an account  <Link to='/login' className='text-blue-600'>Register</Link></p>
            </div>
        </div>
    );
};

export default Register;