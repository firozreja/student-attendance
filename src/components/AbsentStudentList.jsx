import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const AbsentStudentList = () => {
  const { setStudentStatus, studentState } = useContext(StudentCtx);

  return (
    <div className="list absentStudentLis">
      <h2>Absent Student List</h2>
      <ul>
        {studentState.students
          .filter((item) => item.isPresent === false)
          .map((student) => (
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

export default AbsentStudentList;
