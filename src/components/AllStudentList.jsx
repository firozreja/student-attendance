import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const AllStudentList = () => {
  const { setStudentStatus, studentState, dispatch } = useContext(StudentCtx);

  return (
    <div className="list all-student-lis">
      <h2>All Student List</h2>
      <ul>
        {studentState.students.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <button
              onClick={() =>
                dispatch({ type: "edit_student", payload: student })
              }
            >
              Edit
            </button>
            <button
              onClick={() =>
                dispatch({ type: "remove_student", payload: student.id })
              }
            >
              Delete
            </button>

            <button onClick={() => setStudentStatus(student, "present")}>
              Make Present
            </button>
            <button onClick={() => setStudentStatus(student, "absent")}>
              Make Absent
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllStudentList;
