import "./App.css";
import StudentForm from "./Component/StudentForm";
import StudentTable from "./Component/StudentTable";

function App() {
	return (
		<>
			<h1>Quản lý Sinh Viên</h1>
			<StudentForm />
			<StudentTable />
		</>
	);
}

export default App;
