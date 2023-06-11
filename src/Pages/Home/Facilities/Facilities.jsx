import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import {motion} from "framer-motion"
const Facilities = () => {
  const facilities = [
    {
      title: "Rest Room",
      image:
        "https://i.pinimg.com/originals/98/b5/a1/98b5a11384aee0e4f53540ed63195d51.jpg",
    },
    {
      title: "Swimming Complex",
      image:
        "https://kerrysportsacademy.ie/wp-content/uploads/2020/12/swimmer.jpg",
    },
    {
      title: "Healthy Food Canteen",
      image:
        "https://www.asiaone.com/sites/default/files/styles/a1_600x316/public/health/20160120-st-canteen_0.jpg?itok=Vk1IgWNC",
    },
    {
      title: "Professional Coach",
      image:
        "https://d27d7eu7k4ln2x.cloudfront.net/assets/masters/partners/profile/profile-IMG_2903.jpg",
    },
    {
      title: "The Gym",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Player Recovery",
      image:
        "https://media.npr.org/assets/img/2016/06/22/distraction-7_edited_custom-0410fb522854e0f58ff9540049983c337a09ccdc-s1100-c50.jpg",
    },
  ];
  console.log(facilities);
  return (
    <motion.div
    initial = {{x: -2250}}
    animate = {{x: 0}}
    transition={{delay : 2, duration : 0.5}}
     className="mb-20">
      <div>
        <SectionTitle
          title={"Premier Training Facilities"}
          subTitle={"Unlocking Potential through Top-Notch Amenities"}
        ></SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {facilities.map((facility) => (
            <>
              <div  className="relative group">
                <img
                  src={facility.image}
                  alt=""
                  className="w-full h-[300px] rounded shadow-xl hover:shadow-2xl"
                />
                <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-cyan-700 to-[rgba(221, 221, 221, 0)] to-opacity-30 duration-500 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                <div className="absolute top-0 duration-200 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                  <div className="flex-row text-center">
                    <h1 className="text-gray-50 font-bold text-lg">
                      {facility.title}
                    </h1>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Facilities;
