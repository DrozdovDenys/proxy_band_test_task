import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UsersService from "../API/UsersService";

const initialState = {
  users: [],
  isUsersLoading: false,
  usersError: "",

  userAlbums: [],
  isUserALoading: false,
  userAError: "",

  userPosts: [],
  isUserPLoading: false,
  userPError: "",

  userName: "",
};

export const getUsers = createAsyncThunk(
  "getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const users = await UsersService.getUsers();
      return users;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getUserPosts = createAsyncThunk(
  "getUserPosts",
  async (id, { rejectWithValue }) => {
    try {
      const users = await UsersService.getUserPosts(id);
      return users;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getUserAlbums = createAsyncThunk(
  "getUserAlbums",
  async (id, { rejectWithValue }) => {
    try {
      const users = await UsersService.getUserAlbums(id);
      return users;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUserName(state, action) {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // =================get USERS===================================
      .addCase(getUsers.pending, (state) => {
        state.isUsersLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isUsersLoading = false;
        state.users = action.payload;
        state.usersError = "";
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isUsersLoading = false;
        state.usersError = action.payload;
      })
      // ================get USER ALBUMS=======================================
      .addCase(getUserAlbums.pending, (state) => {
        state.isUserALoading = true;
      })
      .addCase(getUserAlbums.fulfilled, (state, action) => {
        state.isUserALoading = false;
        state.userAlbums = action.payload;
        state.userAError = "";
      })
      .addCase(getUserAlbums.rejected, (state, action) => {
        state.isUserALoading = false;
        state.userAError = action.payload;
      })
      // ================get USER POSTS=======================================
      .addCase(getUserPosts.pending, (state) => {
        state.isUserPLoading = true;
      })
      .addCase(getUserPosts.fulfilled, (state, action) => {
        state.isUserPLoading = false;
        state.userPosts = action.payload;
        state.userPError = "";
      })
      .addCase(getUserPosts.rejected, (state, action) => {
        state.isUserPLoading = false;
        state.userPError = action.payload;
      });
  },
});

export const { getUserName } = usersSlice.actions;
export default usersSlice.reducer;
