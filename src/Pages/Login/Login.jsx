import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const {handleLogin, handleGoogleSignIn} = useContext(AuthContext)
  const onSubmit = (data) => {
    handleLogin(data.email,data.password)
    .then(result =>{
      console.log(result)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "user logged in successfully",
          showConfirmButton: false,
          timer: 1500
        })
        reset()
        // navigate(from, {replace : true});
    })
    .catch(error =>{
        console.log(error.message);
    })
  };
  const handleGoogleLogin = () => {
    handleGoogleSignIn()
    .then(result =>{
        const loggedUser = result.user
        console.log(loggedUser);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "user logged in successfully",
          showConfirmButton: false,
          timer: 1500
        })
        // navigate(from, {replace : true});
    })
    .catch(error =>{
        console.log(error.message);
    })
  };
  return (
    <>
      <Helmet>
        <title>Sports Academy | Login</title>
      </Helmet>
      <div className="bg-base-200 my-14 p-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10">
          <div className="text-center lg:ml-20 ml-0 w-full md:w-1/2 lg:my-0 my-5 lg:text-left">
            <h1 className="text-5xl text-center font-bold lg:mb-16 mb-5">
              Login here!
            </h1>
            <img
              src="https://i.ibb.co/BL491Sn/image-removebg-preview-4.png"
              alt=""
            />
          </div>
          <div className="card flex-shrink-0 md:w-1/2 w-full m-10 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  {...register("email", { required: true })}
                  name="email"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password")}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="text-center ">
                <small className="text-center">
                  New in Special Sports Academy? Please
                  <Link className="text-blue-700 ml-2" to="/register">
                    Register
                  </Link>
                </small>
              </p>
            </form>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-circle btn-outline mx-auto mb-5"
            >
              <FaGoogle className="text-red-600 "></FaGoogle>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
