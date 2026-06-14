// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// Components
import TaskNavbar from "./components/TaskNavbar";
import TaskBrowser from "./components/TaskBrowser";
import TaskInput from "./components/TaskInput";
import TaskViewer from "./components/TaskViewer";

function App() {

    return (
        <main>
            <TaskNavbar />
            <TaskInput />
            <TaskViewer />
        </main>
    );
}

export default App;
