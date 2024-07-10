import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import EmployeeList from './components/employee/EmployeeList';
import EmployeeForm from './components/employee/EmployeeForm';
import EmployeeDetails from './components/employee/EmployeeDetails.jsx';
import CandidateList from './components/candidate/CandidateList';
import CandidateForm from './components/candidate/CandidateForm';
import CandidateDetails from './components/candidate/CandidateDetails';
import AbsenceList from './components/absence/AbsenceList';
import AbsenceForm from './components/absence/AbsenceForm';
import AbsenceDetails from './components/absence/AbsenceDetails';
import VacationList from './components/vacation/VacationList';
import VacationForm from './components/vacation/VacationForm';
import VacationDetails from './components/vacation/VacationDetails';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<EmployeeList />} />
                    <Route path="employees" element={<EmployeeList />} />
                    <Route path="employees/new" element={<EmployeeForm />} />
                    <Route path="employees/:id" element={<EmployeeDetails />} />
                    <Route path="employees/:id/edit" element={<EmployeeForm />} />
                    <Route path="/candidates" element={<CandidateList/>} />
                    <Route path="/candidates/new" element={<CandidateForm/>} />
                    <Route path="/candidates/:id/edit" element={<CandidateForm/>} />
                    <Route path="/candidates/:id" element={<CandidateDetails/>} />
                    <Route path="/absences"  element={<AbsenceList/>} />
                    <Route path="/absences/new" element={<AbsenceForm/>} />
                    <Route path="/absences/:id/edit" element={<AbsenceForm/>} />
                    <Route path="/absences/:id" element={<AbsenceDetails/>} />
                    <Route path="/vacations"  element={<VacationList/>} />
                    <Route path="/vacations/new" element={<VacationForm/>} />
                    <Route path="/vacations/:id/edit" element={<VacationForm/>} />
                    <Route path="/vacations/:id" element={<VacationDetails/>} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
