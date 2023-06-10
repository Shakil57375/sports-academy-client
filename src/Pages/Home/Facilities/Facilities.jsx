import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

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
        "https://oakland.edu/Assets/Oakland/newsatou/graphics/2016/Bellin960.jpg",
    },
  ];
  console.log(facilities);
  return (
    <div className="mb-20">
      <div>
        <SectionTitle
          title={"Premier Training Facilities"}
          subTitle={"Unlocking Potential through Top-Notch Amenities"}
        ></SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {facilities.map((facility) => (
            <>
              <div className="relative">
                <div className="relative">
                  <img
                    src={facility.image}
                    className="facility-image h-[300px] w-full opacity-50 hover:opacity-100 transition-opacity duration-300 hover:text-white"
                    alt=""
                  />
                  <h2 className="absolute top-2 text-black font-bold right-3 facility-title hover:text-white text-2xl transition-colors duration-300">
                    {facility.title}
                  </h2>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
