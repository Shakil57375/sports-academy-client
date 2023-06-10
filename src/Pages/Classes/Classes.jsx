import { useApprovedClass } from "../../hooks/useapprovedClass";

const Classes = () => {
    const [approvedClass] = useApprovedClass()
    console.log(approvedClass);
    return (
        <div>
            
        </div>
    );
};

export default Classes;