import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Employee Manager</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/employees">Employees</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/employees/new">Add Employee</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/candidates">Candidates</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/candidates/new">Add Candidates</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/vacations">Vacations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/vacations/new">Add Vacations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/absences">Absences</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/absences/new">Add Absences</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
