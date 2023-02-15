import './App.css';
import UseStateHook from './components/useState'
import UseEffectHook from './components/useEffect'
import UseRefHook from './components/useRef'
import UseMemoHook from './components/useMemo'
import UseCallbackHook from './components/useCallback'
import UseContextHook from './components/useContext'
import UseReducerHook from './components/useReducer'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={
        <Home/>}/>
        <Route path="/useState" element={
         <UseStateHook/>} />
        <Route path="/useEffect" element={
         <UseEffectHook/>} />
        <Route path="/useRef" element={
        <UseRefHook/>} />
        <Route path="/useMemo" element={
        <UseMemoHook/>} />
        <Route path="/useCallback" element={
        <UseCallbackHook/>} />
        <Route path="/useContext" element={
        <UseContextHook/>} />
        <Route path="/useReducer" element={
        <UseReducerHook/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
