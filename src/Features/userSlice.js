// import { createSlice } from "@reduxjs/toolkit";

// // Initial state for user
// const initialState = {
//   user: null,      // will hold {id, name, email} etc.
//   isLoggedIn: false,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     // login and save user data
//     login: (state, action) => {
//       state.user = action.payload;  // payload = {id, name, email}
//       state.isLoggedIn = true;
//     },

//     // logout and clear user data
//     logout: (state) => {
//       state.user = null;
//       state.isLoggedIn = false;
//     },

//     // update user info (optional)
//     updateUser: (state, action) => {
//       state.user = { ...state.user, ...action.payload };
//     },
//   },
// });

// // Export actions
// export const { login, logout, updateUser } = userSlice.actions;

// // Export reducer
// export default userSlice.reducer;
