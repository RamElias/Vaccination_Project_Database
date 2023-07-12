import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RegistrationForm from "./pages/RegistrationForm";
import SummaryPage from "./pages/SummaryPage";
import Navbar from "./Navbar";

const App = () => {
    return (
            <Router>
                <Navbar/>
                    <Routes>
                        <Route path="/" element={<RegistrationForm/>}/>
                        <Route path="/summary" element={<SummaryPage/>}/>
                    </Routes>
            </Router>
    );
};

export default App;
