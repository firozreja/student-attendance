import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";
import "../App.css";

const PresentStudentList = () => {
  const { presentsStudentList, setStudentStatus } = useContext(StudentCtx);

  return (
    <div className="list presentStudentList">
      <h2>Present Student List</h2>
      <ul>
        {presentsStudentList.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <button onClick={() => setStudentStatus(student, "toggle")}>
              Accidentally Added
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PresentStudentList;
