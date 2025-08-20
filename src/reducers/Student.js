export const studentReducer = (state, action) => {
  switch (action.type) {
    case "change_student_name": {
      return {
        ...state,
        studentName: action.payload,
      };
    }
    case "create_student": {
      const newStudent = {
        id: Date.now() + "",
        name: state.studentName,
        isPresent: undefined,
      };
      return {
        ...state,
        students: [...state.students, newStudent],
        studentName: "",
      };
    }
    case "edit_student": {
      return {
        ...state,
        editMode: true,
        editableStudent: action.payload,
        studentName: action.payload.name,
      };
    }
    case "update_student": {
      return {
        ...state,
        students: state.students.map((item) => {
          if (item.id === state.editableStudent.id) {
            return { ...item, name: state.studentName };
          }
          return item;
        }),
        editMode: false,
        editableStudent: null,
      };
    }
    case "remove_student": {
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };
    }
    case "set_student_status": {
      return {
        ...state,
        students: state.students.map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.status === "present") {
              return { ...item, isPresent: true };
            }
            if (action.payload.status === "absent") {
              return { ...item, isPresent: false };
            }
            if (action.payload.status === "toggle") {
              return { ...item, isPresent: !item.isPresent };
            }
          }
          return item;
        }),
      };
    }
    default: {
      return state;
    }
  }
};
