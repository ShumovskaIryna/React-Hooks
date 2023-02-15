import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
    <div className="App">
        <header className="App-header">
            <div className="container">
                <Link to="/useState" 
                    style={{ 
                        textDecoration: "none", 
                        color: "white", 
                        margin: "13px", 
                        border: "solid 2px lightblue", 
                        padding: "5px" }}>
                    <span className="">useState</span>
                </Link>
                <Link to="/useEffect" 
                    style={{ 
                        textDecoration: "none", 
                        color: "white", 
                        margin: "13px", 
                        border: "solid 2px lightblue", 
                        padding: "5px" }}>
                    <span className="">useEffect</span>
                </Link>
                <Link to="/useRef" 
                    style={{ 
                        textDecoration: "none", 
                        color: "white", 
                        margin: "13px", 
                        border: "solid 2px lightblue", 
                        padding: "5px" }}>
                    <span className="">useRef</span>
                </Link>
                <Link to="/useMemo" 
                    style={{ 
                        textDecoration: "none", 
                        color: "white", 
                        margin: "13px", 
                        border: "solid 2px lightblue", 
                        padding: "5px" }}>
                    <span className="">useMemo</span>
                </Link>
                <Link to="/useCallback"  
                    style={{ 
                        textDecoration: "none", 
                        color: "white", 
                        margin: "13px", 
                        border: "solid 2px lightblue", 
                        padding: "5px" }}>
                    <span className="">useCallback</span>
                </Link>
                <Link to="/useContext"  
                    style={{ 
                        textDecoration: "none", 
                        color: "white", 
                        margin: "13px", 
                        border: "solid 2px lightblue", 
                        padding: "5px" }}>
                    <span className="">useContext</span>
                </Link>
                <Link to="/useReducer"  
                    style={{ 
                        textDecoration: "none", 
                        color: "white", 
                        margin: "13px", 
                        border: "solid 2px lightblue", 
                        padding: "5px" }}>
                    <span className="">useReducer</span>
                </Link>
            </div>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    </div>
    )
}

export default Home;