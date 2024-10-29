// src/redux/studentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	studentList: [], // Danh sách sinh viên
	currentStudent: null, // Sinh viên hiện tại khi chỉnh sửa
};

const studentSlice = createSlice({
	name: "students",
	initialState,
	reducers: {
		addStudent: (state, action) => {
			state.studentList.push(action.payload);
		},
		deleteStudent: (state, action) => {
			state.studentList = state.studentList.filter(
				(student) => student.id !== action.payload
			);
		},
		updateStudent: (state, action) => {
			const index = state.studentList.findIndex(
				(student) => student.id === action.payload.id
			);
			if (index >= 0) {
				state.studentList[index] = action.payload;
			}
		},
		setCurrentStudent: (state, action) => {
			state.currentStudent = action.payload;
		},
		clearCurrentStudent: (state) => {
			state.currentStudent = null;
		},
	},
});

export const {
	addStudent,
	deleteStudent,
	updateStudent,
	setCurrentStudent,
	clearCurrentStudent,
} = studentSlice.actions;
export default studentSlice.reducer;
