import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategorieLaser: any = createAsyncThunk(
  "NewProduct/fetchNewProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "",
        {
          method: "GET",
          headers: {
            accept: "application/hal+json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("что-то пошло не так");
      }
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const getCategorieLaser = createSlice({
  name: "getCategories",
  initialState: {
    data: [],
    error: null,
    message: null,
    response: null,
    status: 0,
    success: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    return (
      builder.addCase(fetchCategorieLaser.pending, (state: any) => {
        state.status = "loading";
        state.error = null;
      }),
      builder.addCase(
        fetchCategorieLaser.fulfilled,
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.data = payload;
        }
      ),
      builder.addCase(
        fetchCategorieLaser.rejected,
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.data = payload;
          console.log(payload);
        }
      )
    );
  },
});

const { actions, reducer } = getCategorieLaser;
export const {} = actions;
export default reducer;
