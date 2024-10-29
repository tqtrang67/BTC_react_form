// src/components/StudentForm.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addStudent,
	updateStudent,
	setCurrentStudent,
	clearCurrentStudent,
} from "../redux/studentSlice";

const StudentForm = () => {
	const dispatch = useDispatch();
	const currentStudent = useSelector(
		(state) => state.students.currentStudent
	);

	const [formData, setFormData] = useState({
		id: "",
		name: "",
		phone: "",
		email: "",
	});

	useEffect(() => {
		if (currentStudent) {
			setFormData(currentStudent);
		}
	}, [currentStudent]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentStudent) {
			dispatch(updateStudent(formData));
			dispatch(clearCurrentStudent());
		} else {
			dispatch(addStudent({ ...formData, id: Date.now().toString() }));
		}
		setFormData({ id: "", name: "", phone: "", email: "" });
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="p-4 border rounded shadow-sm bg-light"
		>
			<div className="row mb-3">
				<div className="col-md-6">
					<label className="form-label ">Mã SV:</label>
					<input
						type="text"
						name="id"
						value={formData.id}
						onChange={handleChange}
						placeholder="Mã SV"
						required
						className="form-control"
						disabled={currentStudent}
					/>
				</div>

				<div className="col-md-6">
					<label className="form-label">Họ tên:</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Họ tên"
						required
						className="form-control"
					/>
				</div>
			</div>

			<div className="row mb-3">
				<div className="col-md-6">
					<label className="form-label">Số điện thoại:</label>
					<input
						type="text"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						placeholder="Số điện thoại"
						required
						className="form-control"
					/>
				</div>

				<div className="col-md-6">
					<label className="form-label">Email:</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Email"
						required
						className="form-control"
					/>
				</div>
			</div>

			<button className="btn btn-primary" type="submit">
				{currentStudent ? "Cập nhật" : "Thêm sinh viên"}
			</button>
		</form>
	);
};

export default StudentForm;
