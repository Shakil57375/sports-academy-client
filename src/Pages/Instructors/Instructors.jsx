import { useInstructors } from "../../hooks/useInstructors";

const Instructors = () => {
    const [instructor] = useInstructors()
    console.log(instructor);
    return (
        <div>
            <p>Instructor page</p>
        </div>
    );
};

export default Instructors;