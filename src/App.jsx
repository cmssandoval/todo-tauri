// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import TaskBrowser from "./components/TaskBrowser";
import TaskInput from "./components/TaskInput";
import TaskViewer from "./components/TaskViewer";

function App() {

    return (
        <main>
            <Navbar />
            <TaskBrowser/>
            <TaskInput />
            <TaskViewer />
        </main>
    );
}

export default App;
