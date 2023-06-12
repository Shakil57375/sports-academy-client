import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import InstructorsCard from "../../Instructors/InstructorsCard";

const Instrucotrs = () => {
  const { data: instructors = [] } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch("https://summer-camp-school-server-shakil57375.vercel.app/instructor");
      return res.json();
    },
  });
  console.log(instructors);
  return (
    <div>
        <SectionTitle title={"The Best in the Field"} subTitle={"Learn from the Best and Achieve Greatness"}></SectionTitle>
      <div className="grid my-20 grid-cols-1 lg:grid-cols-3 mt-16 gap-10">
        {instructors.map((instructor) => (
          <div key={instructor._id}>
                <InstructorsCard instructor={instructor}></InstructorsCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instrucotrs;
