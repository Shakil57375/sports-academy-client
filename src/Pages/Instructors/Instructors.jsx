import { useInstructors } from "../../hooks/useInstructors";
import InstructorsCard from "./InstructorsCard";

const Instructors = () => {
  const [instructors] = useInstructors();
  console.log(instructors);
  return (
    <div>
      <div className="grid my-20 grid-cols-1 lg:grid-cols-3 mt-10 gap-5">
        {instructors.map((instructor) => (
          <div key={instructor._id}>
            <InstructorsCard instructor={instructor}></InstructorsCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
