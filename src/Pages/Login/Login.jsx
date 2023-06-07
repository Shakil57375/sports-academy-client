import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    
  };
  return (
    <>
      <Helmet>
        <title>Sports Academy | Login</title>
      </Helmet>
      <div className="bg-base-200 my-14 p-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10">
          <div className="text-center lg:ml-20 ml-0 w-full md:w-1/2 lg:my-0 my-5 lg:text-left">
            <h1 className="text-5xl text-center font-bold lg:mb-16 mb-5">Login here!</h1>
            <img src="https://i.ibb.co/BL491Sn/image-removebg-preview-4.png" alt="" />
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
                  {...register("password",)}
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
              <p className="text-center mb-4">
                <small className="text-center">
                  New in Special Sports Academy? Please
                  <Link className="text-blue-700 ml-2" to="/register">
                    Register
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
