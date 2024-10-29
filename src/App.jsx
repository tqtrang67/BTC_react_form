import { useState } from "react";
import "./App.css";
import StudentForm from "./Component/StudentForm";
import StudentTable from "./Component/StudentTable";

function App() {
	const [search, setSearch] = useState("");
	return (
		<>
			<h1>Quản lý Sinh Viên</h1>
			<div className="mb-3">
				<label>Tìm kiếm:</label>
				<input
					type="text"
					placeholder="Tìm kiếm  "
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			<StudentForm />
			<StudentTable search={search} />
		</>
	);
}

export default App;
