import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api';

// Register User
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const payload = {
        username: userData.username,
        // lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        // mobileNo: userData.mobileNo,
        // gender: userData.gender,
        // userType: userData.userType,
        // address: userData.address,
      };
      const response = await axios.post('/register', payload);
      return response.data;
    } catch (err) {
      if (process.env.NODE_ENV === 'development') {
        console.error(err);
      }
      return rejectWithValue(err.response?.data?.message || 'Registration failed');
    }
  }
);

// Login User
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/login', credentials);
      return response.data;
    } catch (err) {
      if (process.env.NODE_ENV === 'development') {
        console.error(err);
      }
      return rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  }
);

// Forgot  //updated
export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post('/forgot-password', { email });
      return response.data;
    } catch (err) {
      if (process.env.NODE_ENV === 'development') {
        console.error(err);
      }
      return rejectWithValue(err.response?.data?.message || 'Failed to send reset code');
    }
  }
);

// Verify Reset Code
export const verifyResetCode = createAsyncThunk(
  'auth/verifyResetCode',
  async ({ email, code }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/verify-reset-code', { email, code });
      return response.data;
    } catch (err) {
      if (process.env.NODE_ENV === 'development') {
        console.error(err);
      }
      return rejectWithValue(err.response?.data?.message || 'Invalid reset code');
    }
  }
);

// Reset Password
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ email, code, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/reset-password', { email, code, password });
      return response.data;
    } catch (err) {
      if (process.env.NODE_ENV === 'development') {
        console.error(err);
      }
      return rejectWithValue(err.response?.data?.message || 'Password reset failed');
    }
  }
);

// Get User Profile
// export const getUserProfile = createAsyncThunk(
//   'auth/getUserProfile',
//   async (_, { getState, rejectWithValue }) => {
//     try {
//       const { accessToken } = getState().auth;
//       const response = await axios.get('/profile', {
//         headers: { Authorization: `Bearer ${accessToken} `},
//       });
//       return response.data;
//     } catch (err) {
//       if (process.env.NODE_ENV === 'development') {
//         console.error(err);
//       }
//       return rejectWithValue(err.response?.data?.message || 'Failed to fetch profile');
//     }
//   }
// );
// Update User Profile
// export const updateUserProfile = createAsyncThunk(
//   'auth/updateUserProfile',
//   async (updatedData, { getState, rejectWithValue }) => {
//     try {
//       const { accessToken } = getState().auth;
//       const response = await axios.put('/profile', updatedData, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       return response.data;
//     } catch (err) {
//       if (process.env.NODE_ENV === 'development') {
//         console.error(err);
//       }
//       return rejectWithValue(err.response?.data?.message || 'Failed to update profile');
//     }
//   }
// );


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    accessToken: null,
    refreshToken: null,
    loadingRegister: false,
    loadingLogin: false,
    loadingForgotPassword: false,
    loadingVerifyCode: false,
    loadingResetPassword: false,
    // loadingProfile: false,
    error: null,
    resetStatus: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.error = null;
      state.resetStatus = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loadingRegister = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loadingRegister = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loadingRegister = false;
        state.error = action.payload;
      })
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loadingLogin = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loadingLogin = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loadingLogin = false;
        state.error = action.payload;
      })
      // Forgot Password
      .addCase(forgotPassword.pending, (state) => {
        state.loadingForgotPassword = true;
        state.error = null;
        state.resetStatus = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loadingForgotPassword = false;
        state.resetStatus = 'code_sent';
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loadingForgotPassword = false;
        state.error = action.payload;
        state.resetStatus = null;
      })
      // Verify Reset Code
      .addCase(verifyResetCode.pending, (state) => {
        state.loadingVerifyCode = true;
        state.error = null;
        state.resetStatus = null;
      })
      .addCase(verifyResetCode.fulfilled, (state) => {
        state.loadingVerifyCode = false;
        state.resetStatus = 'code_verified';
      })
      .addCase(verifyResetCode.rejected, (state, action) => {
        state.loadingVerifyCode = false;
        state.error = action.payload;
        state.resetStatus = null;
      })
      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.loadingResetPassword = true;
        state.error = null;
        state.resetStatus = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loadingResetPassword = false;
        state.resetStatus = 'password_reset';
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loadingResetPassword = false;
        state.error = action.payload;
        state.resetStatus = null;
      })
      // Update User Profile
// .addCase(updateUserProfile.pending, (state) => {
//   state.loadingProfile = true;
//   state.error = null;
// })
// .addCase(updateUserProfile.fulfilled, (state, action) => {
//   state.loadingProfile = false;
//   state.user = action.payload;
// })
// .addCase(updateUserProfile.rejected, (state, action) => {
//   state.loadingProfile = false;
//   state.error = action.payload;
// })

      // Get User Profile
      // .addCase(getUserProfile.pending, (state) => {
      //   state.loadingProfile = true;
      //   state.error = null;
      // })
      // .addCase(getUserProfile.fulfilled, (state, action) => {
      //   state.loadingProfile = false;
      //   state.user = action.payload;
      // })
      // .addCase(getUserProfile.rejected, (state, action) => {
      //   state.loadingProfile = false;
      //   state.error = action.payload;
      // });
      
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;