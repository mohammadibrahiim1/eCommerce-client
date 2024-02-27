import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
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
    // return data.user.email;
    return { name: data.user.displayName, email: data.user.email };
  }
);

export const getUser = createAsyncThunk("auth/getUser", async (email) => {
  const res = await fetch(` http://localhost:5173/api/v1/users/${email}`);
  const data = await res.json();
  if (data.status) {
    return data;
  }
  return email;
});

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    console.log(data);
    return data.user.email;
  }
);

export const signInWithGoogle = createAsyncThunk(
  "auth/signInWithGoogle",
  async () => {
    const googleProvider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, googleProvider);
    console.log(data);
    return data.user.email;
  }
);

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
        console.log(payload);
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
        
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.email = payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user.email = "";
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(signInWithGoogle.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(signInWithGoogle.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.user.email = payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.isLoading = false;
        state.user.email = "";
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload.status) {
          state.user = payload.data;
        } else {
          state.user.email = payload;
        }
        state.isError = false;
        state.error = "";
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user.email = "";
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const { logOUt, setUser, toggleLoading } = authSlice.actions;
export default authSlice.reducer;
