import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createPatient = createAsyncThunk(
  "patient/createPatient",
  async ({ updatedPatientData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createPatient(updatedPatientData);
      toast.success("Patient Added Successfully");
      navigate("/commen");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getPatients = createAsyncThunk(
  "patient/getPatients",
  async (page, { rejectWithValue }) => {
    try {
      const response = await api.getPatients(page);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const getPatient = createAsyncThunk(
  "patient/getPatient",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getPatient(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getPatientsByUser = createAsyncThunk(
  "patient/getPatientsByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getPatientsByUser(userId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deletePatient = createAsyncThunk(
  "patient/deletePatient",
  async ({ id, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.deletePatient(id);
      toast.success("Patient Deleted Successfully");
      navigate("/dashboard");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updatePatient = createAsyncThunk(
  "patient/updatePatient",
  async ({ id, updatedPatientData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.updatePatient(updatedPatientData, id);
      toast.success("Patient Updated Successfully");
      navigate("/dashboard");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const searchPatients = createAsyncThunk(
  "patient/searchPatients",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await api.getPatientsBySearch(searchQuery);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const patientSlice = createSlice({
  name: "patient",
  initialState: {
    patient: {},
    patients: [],
    userPatients: [],
    // pages
    currentPage: 1,
    numberOfPages: null,
    error: "",
    loading: false,
  },

  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },

  extraReducers: {
    [createPatient.pending]: (state, action) => {
      state.loading = true;
    },
    [createPatient.fulfilled]: (state, action) => {
      state.loading = false;
      state.patients = [action.payload];
    },
    [createPatient.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getPatients.pending]: (state, action) => {
      state.loading = true;
    },
    [getPatients.fulfilled]: (state, action) => {
      state.loading = false;
      state.patients = action.payload.data;
      state.numberOfPages = action.payload.numberOfPages;
      state.currentPage = action.payload.currentPage;
    },
    [getPatients.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getPatient.pending]: (state, action) => {
      state.loading = true;
    },
    [getPatient.fulfilled]: (state, action) => {
      state.loading = false;
      state.patient = action.payload;
    },
    [getPatient.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getPatientsByUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getPatientsByUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userPatients = action.payload;
    },
    [getPatientsByUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [deletePatient.pending]: (state, action) => {
      state.loading = true;
    },
    [deletePatient.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("action", action);
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userPatients = state.userPatients.filter(
          (item) => item._id !== id
        );
        state.patients = state.patients.filter((item) => item._id !== id);
      }
    },
    [deletePatient.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [updatePatient.pending]: (state, action) => {
      state.loading = true;
    },
    [updatePatient.fulfilled]: (state, action) => {
      state.loading = false;

      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userPatients = state.userPatients.map((item) =>
          item._id === id ? action.payload : item
        );
        state.patients = state.patients.map((item) =>
          item._id === id ? action.payload : item
        );
      }
    },
    [updatePatient.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [searchPatients.pending]: (state, action) => {
      state.loading = true;
    },
    [searchPatients.fulfilled]: (state, action) => {
      state.loading = false;
      state.patients = action.payload;
    },
    [searchPatients.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setCurrentPage } = patientSlice.actions;

export default patientSlice.reducer;
