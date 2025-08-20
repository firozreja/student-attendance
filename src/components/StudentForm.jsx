import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const StudentForm = () => {
  const { studentState, submitHandler, changeHandler } = useContext(StudentCtx);

  return (
    <form onSubmit={submitHandler}>
      <div className="form">
        <input
          type="text"
          value={studentState.studentName}
          onChange={changeHandler}
        />
        <button type="submit">
          {studentState.editMode ? "Update Student" : "Student Added"}
        </button>
      </div>
    </form>
  );
};

export default StudentForm;
