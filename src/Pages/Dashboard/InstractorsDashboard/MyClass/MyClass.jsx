import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import { Helmet } from "react-helmet";

const MyClass = () => {
    const {user} = useContext(AuthContext)
    console.log(user.email);
    const {data : MyClasses = []} = useQuery({
        queryKey : ["approvedClass"],
        queryFn : async() =>{
          const res = await fetch(`http://localhost:5000/class?email=${user.email}`);
          return res.json()
        }
      })
      console.log(MyClasses);
    return (
        <div className="w-full">
        <Helmet>
          <title>Sports Academy | Manage users</title>
        </Helmet>
        <h3 className="text-3xl font-semibold my-4">
          Total Classes: {MyClasses.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>price</th>
                <th>Status</th>
                <th>Enrolled Students</th>
                <th>Feedback</th>
                <th>update</th>
              </tr>
            </thead>
            <tbody>
              {MyClasses.map((Classes, index) => (
                <tr key={Classes._id}>
                  <th>{index + 1}</th>
                  <td>{Classes.className}</td>
                  <td>{Classes.price}</td>
                  <td className="ml-4">
                    <p>{Classes.status}</p>
                  </td>
                  <td>
                    {/* TODO make it dynamic */}
                    <p>1</p>
                  </td>
                  <td>
                    <p>coming</p>
                  </td>
                  <td>
                    <FaEdit />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyClass;