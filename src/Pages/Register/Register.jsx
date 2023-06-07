import { Link, useNavigate} from "react-router-dom";
import { FaEyeSlash, FaEye, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const { handleRegister, updateUser, handleGoogleSignIn, logOut } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleRegister(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateData(result.user, data.name, data.photoURL);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "user logged in successfully",
          showConfirmButton: false,
          timer: 1500
        })
        reset()
        logOut()
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            console.log(error.message);
          });
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
    const updateData = (user, name, photo) => {
      updateUser(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          console.log("updated");
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
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
        <title>Sports Academy | Register</title>
      </Helmet>
      <div className="min-h-screen bg-base-200 my-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10">
          <div className="text-center lg:ml-20 ml-0 w-full md:w-1/2 lg:my-0 my-5 lg:text-left">
            <h1 className="text-5xl text-center font-bold lg:mb-16 mb-5">Register now!</h1>
            <img src="https://i.ibb.co/GMZ8pnb/register-graphics-removebg-preview.png" alt="" />
          </div>
          <div className="card flex-shrink-0 md:w-1/2 w-full m-10 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="name"
                  className="w-full px-3 py-2 border rounded"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="w-full px-3 py-2 border rounded"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  name="email"
                  className="w-full px-3 py-2 border rounded"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!#$%&?"])/,
                  })}
                  className="w-full px-3 py-2 border rounded"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">password is required</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Your password must include one uppercase special character
                    and minimum 6 character.
                  </p>
                )}
                <p
                  className="absolute top-[330px] right-10"
                  onClick={() => setShow(!show)}
                >
                  <small>
                    {show ? (
                      <span>
                        <FaEyeSlash className="text-2xl" />
                      </span>
                    ) : (
                      <span>
                        <FaEye className="text-2xl" />
                      </span>
                    )}
                  </small>
                </p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirmPassword"
                  {...register("confirmPassword", { required: true })}
                  name="confirmPassword"
                  className="w-full px-3 py-2 border rounded"
                />
                {errors.password && (
                  <span className="text-red-600">Confirm password is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <select className="w-full px-3 py-2 border rounded" {...register("gender")}>
                  <option className="w-full px-3 py-2 border rounded" value="female">female</option>
                  <option className="w-full px-3 py-2 border rounded" value="male">male</option>
                  <option className="w-full px-3 py-2 border rounded" value="other">other</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="address"
                  {...register("address")}
                  name="address"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
              <p className="text-center mb-4">
                <small className="text-center">
                  Already Have an account? Please{" "}
                  <Link className="text-blue-700" to="/login">
                    Login
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

export default Register;
