import { createSlice } from "@reduxjs/toolkit";

const loginIdUser = createSlice({
  name: "savPosts",
  initialState: "",
  reducers: {
    setUserId: (state: any, { payload }: { payload: any }) => {
      state = payload;
      return state;
    },
  },
});

const { actions, reducer } = loginIdUser;
export const { setUserId } = actions;
export default reducer;
