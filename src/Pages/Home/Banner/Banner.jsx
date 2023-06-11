// import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <motion.div
      initial={{ y: -3350 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 50 }}
    >
      <AwesomeSlider>
        <div className="relative my-10">
          <img
            className="block lg:h-[800px] h-[300px] lg:w-full max-w-screen-[500px]"
            src="https://www.coachesvoice.com/wp-content/webpc-passthru.php?src=https://www.coachesvoice.com/wp-content/uploads/2021/09/HowtoCoachMain.jpg&nocache=1"
            alt=""
          />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-3 lg:space-y-7 pl-4 lg:pl-28 w-3/4">
              <h2 className="lg:text-5xl text-2xl font-bold">
                Dribble, Shoot, and Win
              </h2>
              <p className="text-gray-200 text-xs lg:text-base">
                Kick-start your football journey with our top-rated sports
                academy. With experienced instructors and a state-of-the-art
                training facility, we offer a comprehensive program that focuses
                on developing technical proficiency, tactical awareness, and
                physical fitness.
              </p>
              <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 text-xs px-5 py-2.5 font-medium rounded-lg text-center lg:text-base ">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://global-uploads.webflow.com/5ca5fe687e34be0992df1fbe/603dd9ba220fd369d7cf5f91_AA_ABH1923-(1)-min.jpeg"
            alt=""
            className="block lg:h-[800px] h-[300px] lg:w-[1300px] max-w-screen-[500px]"
          />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-3 lg:space-y-7 pl-4 lg:pl-28 w-3/4">
              <h2 className="lg:text-5xl text-2xl font-bold">
                Hit It for Six with Our Training
              </h2>
              <p className="text-gray-200 text-xs lg:text-base">
                Join our renowned sports academy and experience the thrill of
                cricket like never before. Our expert instructors are dedicated
                to helping aspiring cricketers of all ages and skill levels
                improve their game.
              </p>
              <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 text-xs px-5 py-2.5 font-medium rounded-lg text-center lg:text-base ">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://rrsportscenter.com/wp-content/uploads/2022/04/Teens-basketball-training.jpeg"
            alt=""
            className="block lg:h-[800px] h-[300px] lg:w-full max-w-screen-[500px]"
          />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-3 lg:space-y-7 pl-4 lg:pl-28 w-3/4">
              <h2 className="lg:text-5xl text-2xl font-bold">
                Basketball Excellence Starts Here
              </h2>
              <p className="text-gray-200 text-xs lg:text-base">
                Discover the world of basketball excellence at our prestigious
                sports academy. Our dedicated team of coaches, with years of
                playing and teaching experience, will help you build a strong
                foundation in the sport. Whether you are a beginner aiming to
                learn the basics or an advanced player looking to refine your
                skills, our structured training sessions cater to all abilities.
              </p>
              <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 text-xs px-5 py-2.5 font-medium rounded-lg text-center lg:text-base ">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://www.mouratoglou.com/wp-content/uploads/2020/02/coach-indiv-patrick-mouratoglou-tennis-e1583486175889.jpg"
            alt=""
            className="block lg:h-[800px] h-[300px] lg:w-full max-w-screen-[500px]"
          />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-3 lg:space-y-7 pl-4 lg:pl-28 w-3/4">
              <h2 className="lg:text-5xl text-2xl font-bold">
                Tennis Excellence Starts Here
              </h2>
              <p className="text-gray-200 text-xs lg:text-base">
                Experience the thrill of tennis at our renowned sports academy.
                Our expert instructors are passionate about teaching this
                dynamic sport to players of all ages and skill levels. Whether
                you are a beginner looking to learn the basics or an advanced
                player aiming to enhance your technique, our comprehensive
                training program covers all aspects of the game.
              </p>
              <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 text-xs px-5 py-2.5 font-medium rounded-lg text-center lg:text-base ">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://www.verywellfamily.com/thmb/FDPF5kpVspZlreS7IhEnGtbk3yw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/young-boy-learning-to-swim-in-pool-with-teacher-488585333-b0bb71ede6254305ba3b8ccc31b9b862.jpg"
            className="block lg:h-[800px] h-[300px] lg:w-[1300px] max-w-screen-[500px]"
          />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-3 lg:space-y-7 pl-4 lg:pl-28 w-3/4">
              <h2 className="lg:text-5xl text-2xl font-bold">
                Unlock Your Swimming Potential
              </h2>
              <p className="text-gray-200 text-xs lg:text-base">
                Immerse yourself in the world of swimming at our leading sports
                academy. Our certified instructors provide a safe and supportive
                environment for swimmers of all ages and skill levels. Whether
                you are a beginner learning to float or an advanced swimmer
                aiming to refine your strokes, our comprehensive training
                program covers everything from basic water safety to competitive
                techniques.
              </p>
              <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 text-xs px-5 py-2.5 font-medium rounded-lg text-center lg:text-base ">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </AwesomeSlider>
    </motion.div>
  );
};

export default Banner;
