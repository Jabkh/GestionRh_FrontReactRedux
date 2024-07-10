import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  employees: [],
  status: 'idle',
  error: null,
};

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
  const response = await axios.get('/api/employees');
  return response.data;
});

export const addEmployee = createAsyncThunk('employees/addEmployee', async (employee) => {
  const response = await axios.post('/api/employees', employee);
  return response.data;
});

export const updateEmployee = createAsyncThunk('employees/updateEmployee', async ({ id, employee }) => {
  const response = await axios.put(`/api/employees/${id}`, employee);
  return response.data;
});

export const deleteEmployee = createAsyncThunk('employees/deleteEmployee', async (id) => {
  await axios.delete(`/api/employees/${id}`);
  return id;
});

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
        .addCase(fetchEmployees.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchEmployees.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.employees = action.payload;
        })
        .addCase(fetchEmployees.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(addEmployee.fulfilled, (state, action) => {
          state.employees.push(action.payload);
        })
        .addCase(updateEmployee.fulfilled, (state, action) => {
          const index = state.employees.findIndex(employee => employee.id === action.payload.id);
          state.employees[index] = action.payload;
        })
        .addCase(deleteEmployee.fulfilled, (state, action) => {
          state.employees = state.employees.filter(employee => employee.id !== action.payload);
        });
  },
});

export default employeeSlice.reducer;