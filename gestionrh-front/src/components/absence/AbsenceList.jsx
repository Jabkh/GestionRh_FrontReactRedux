import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAbsences, deleteAbsence } from '../../store/absence/absenceSlice';
import { Link } from 'react-router-dom';

const AbsenceList = () => {
    const dispatch = useDispatch();
    const absences = useSelector((state) => state.absence.absences);

    useEffect(() => {
        dispatch(fetchAbsences());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteAbsence(id));
    };

    return (
        <div className="container">
            <h1>Absence List</h1>
            <Link to="/absences/new" className="btn btn-primary mb-3">Add Absence</Link>
            <ul className="list-group">
                {absences.map((absence) => (
                    <li key={absence.id} className="list-group-item">
                        {absence.reason}
                        <Link to={`/absences/${absence.id}`} className="btn btn-info ml-3">View</Link>
                        <button onClick={() => handleDelete(absence.id)} className="btn btn-danger ml-3">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AbsenceList;
