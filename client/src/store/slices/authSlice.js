import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock backend response for testing
const mockAuthResponse = (userData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'mock-jwt-token',
        user: {
          id: '1',
          username: userData.username || userData.email,
          email: userData.email,
          battleTag: userData.battleTag,
        },
      });
    }, 1000);
  });
};

// Async thunk for login
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      // For testing, use mock response instead of actual API call
      const response = await mockAuthResponse(credentials);
      return response;
    } catch (err) {
      return rejectWithValue('Login failed. Please try again.');
    }
  }
);

// Async thunk for register
export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      // For testing, use mock response instead of actual API call
      const response = await mockAuthResponse(userData);
      return response;
    } catch (err) {
      return rejectWithValue('Registration failed. Please try again.');
    }
  }
);

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { token, user } = action.payload;
      localStorage.setItem('token', token);
      state.token = token;
      state.isAuthenticated = true;
      state.user = user;
      state.loading = false;
      state.error = null;
    },
    loginFail: (state, action) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { token, user } = action.payload;
        localStorage.setItem('token', token);
        state.token = token;
        state.isAuthenticated = true;
        state.user = user;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        localStorage.removeItem('token');
        state.token = null;
        state.isAuthenticated = false;
        state.user = null;
        state.loading = false;
        state.error = action.payload;
      })
      // Register cases
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        const { token, user } = action.payload;
        localStorage.setItem('token', token);
        state.token = token;
        state.isAuthenticated = true;
        state.user = user;
        state.loading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        localStorage.removeItem('token');
        state.token = null;
        state.isAuthenticated = false;
        state.user = null;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  loginSuccess,
  loginFail,
  logout,
  setLoading,
  clearError,
} = authSlice.actions;

export default authSlice.reducer; 