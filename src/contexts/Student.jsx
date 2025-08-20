import { createContext, useReducer } from "react";
import { studentReducer } from "../reducers/Student";
export const StudentCtx = createContext();

const initState = {
  studentName: "",
  students: [],
  editMode: false,
  editableStudent: null,
};

const StudentProvider = (props) => {
  const { children } = props;

  const [studentState, dispatch] = useReducer(studentReducer, initState);

  //Derived State
  const presentsStudentList = studentState.students.filter(
    (item) => item.isPresent === true
  );
  //changeHandler
  const changeHandler = (e) => {
    dispatch({ type: "change_student_name", payload: e.target.value });
  };
  //submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
    if (studentState.studentName.trim() === "") {
      return alert(`Please inter a valid name`);
    }
    studentState.editMode
      ? dispatch({ type: "update_student" })
      : dispatch({ type: "create_student" });
  };

  //setStudentStatus
  const setStudentStatus = (student, status) => {
    if (student.isPresent !== undefined && status !== "toggle") {
      return alert(
        `This student is already in the ${
          student.isPresent === true ? "Present List" : "Absent List"
        }`
      );
    }

    dispatch({
      type: "set_student_status",
      payload: { id: student.id, status },
    });
  };

  const ctxValue = {
    studentState,
    setStudentStatus,
    presentsStudentList,
    changeHandler,
    submitHandler,
    dispatch,
  };

  return (
    <>
      <StudentCtx.Provider value={ctxValue}>{children}</StudentCtx.Provider>
    </>
  );
};

export default StudentProvider;
