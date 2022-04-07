import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createdoctor = createAsyncThunk(
  "doctor/createdoctor",
  async ({ updatedDoctorData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createdoctor(updatedDoctorData);
      toast.success("Doctor Added Successfully");
      navigate("/doctors");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getDoctors = createAsyncThunk(
  "doctor/getDoctors",
  async (page, { rejectWithValue }) => {
    try {
      const response = await api.getDoctors(page);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getDoctor = createAsyncThunk(
  "doctor/getDoctor",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getDoctor(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getDoctorsByUser = createAsyncThunk(
  "doctor/getDoctorsByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getDoctorsByUser(userId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteDoctor = createAsyncThunk(
  "doctor/deleteDoctor",
  async ({ id, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.deleteDoctor(id);
      toast.success("Doctor Deleted Successfully");
      navigate("/doctors");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateDoctor = createAsyncThunk(
  "doctor/updateDoctor",
  async ({ id, updatedDoctorData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.updateDoctor(updatedDoctorData, id);
      toast.success("Doctor Updated Successfully");
      navigate("/doctors");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const searchDoctors = createAsyncThunk(
  "doctor/searchDoctors",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await api.getDoctorsBySearch(searchQuery);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctor: {},
    doctors: [],
    userDoctors: [],
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
    [createdoctor.pending]: (state, action) => {
      state.loading = true;
    },
    [createdoctor.fulfilled]: (state, action) => {
      state.loading = false;
      state.doctors = [action.payload];
    },
    [createdoctor.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getDoctors.pending]: (state, action) => {
      state.loading = true;
    },
    [getDoctors.fulfilled]: (state, action) => {
      state.loading = false;
      state.doctors = action.payload.data;
      state.numberOfPages = action.payload.numberOfPages;
      state.currentPage = action.payload.currentPage;
    },
    [getDoctors.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getDoctor.pending]: (state, action) => {
      state.loading = true;
    },
    [getDoctor.fulfilled]: (state, action) => {
      state.loading = false;
      state.doctor = action.payload;
    },
    [getDoctor.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getDoctorsByUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getDoctorsByUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userDoctors = action.payload;
    },
    [getDoctorsByUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [deleteDoctor.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteDoctor.fulfilled]: (state, action) => {
      state.loading = false;
      console.log("action", action);
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userDoctors = state.userDoctors.filter((item) => item._id !== id);
        state.doctors = state.doctors.filter((item) => item._id !== id);
      }
    },
    [deleteDoctor.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [updateDoctor.pending]: (state, action) => {
      state.loading = true;
    },
    [updateDoctor.fulfilled]: (state, action) => {
      state.loading = false;

      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userDoctors = state.userDoctors.map((item) =>
          item._id === id ? action.payload : item
        );
        state.doctors = state.doctors.map((item) =>
          item._id === id ? action.payload : item
        );
      }
    },
    [updateDoctor.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [searchDoctors.pending]: (state, action) => {
      state.loading = true;
    },
    [searchDoctors.fulfilled]: (state, action) => {
      state.loading = false;
      state.doctors = action.payload;
    },
    [searchDoctors.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setCurrentPage } = doctorSlice.actions;

export default doctorSlice.reducer;
