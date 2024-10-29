// src/components/StudentTable.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent, setCurrentStudent } from "../redux/studentSlice";

const StudentTable = () => {
	const dispatch = useDispatch();
	const studentList = useSelector((state) => state.students.studentList);

	const handleEdit = (student) => {
		dispatch(setCurrentStudent(student));
	};

	const handleDelete = (id) => {
		dispatch(deleteStudent(id));
	};

	return (
		<table className="table table-striped table-hover table-bordered shadow-sm bg-light">
			<thead className="table-dark">
				<tr>
					<th scope="col">Mã SV</th>
					<th scope="col">Họ tên</th>
					<th scope="col">Số điện thoại</th>
					<th scope="col">Email</th>
					<th scope="col">Hành động</th>
				</tr>
			</thead>
			<tbody>
				{studentList.map((student) => (
					<tr key={student.id}>
						<td>{student.id}</td>
						<td>{student.name}</td>
						<td>{student.phone}</td>
						<td>{student.email}</td>
						<td>
							<button
								className="btn btn-sm btn-primary me-2"
								onClick={() => handleEdit(student)}
							>
								Edit
							</button>
							<button
								className="btn btn-sm btn-danger"
								onClick={() => handleDelete(student.id)}
							>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default StudentTable;
