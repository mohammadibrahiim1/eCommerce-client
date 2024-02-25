import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import app from "../../../../firebase/firebase.config";

const auth = getAuth(app);

const initialState = {
  user: {
    email: "",
    role: "",
  },
  isLoading: true,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ name, email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    console.log(data);
    return { name: data.user.displayName, email: data.user.email };
  }
);

export const getUser = createAsyncThunk("auth/getUser", async (email) => {
  const response = await fetch(` http://localhost:5173/api/v1/user/${email}`);
  const data = await response.json();
  if (data.status) {
    return data;
  }
  return email;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOUt: (state) => {
      state.user = { email: "", role: "" };
    },

    setUser: (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
    },
    toggleLoading: (state) => {
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.email = payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user.email = "";
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const { logOUt } = authSlice.actions;
export default authSlice.reducer;
