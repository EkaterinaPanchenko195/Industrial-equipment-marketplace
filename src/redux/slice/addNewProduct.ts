import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNewProduct: any = createAsyncThunk(
  "NewProduct/fetchNewProduct",
  async (productData, { rejectWithValue }) => {
    console.log(productData);
    try {
      const response = await fetch(
        "",
        {
          method: "POST",
          headers: {
            "accept": "application/hal+json",
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

const submitNewProduct = createSlice({
  name: "submitNewProduct",
  initialState: {
    data: {},
    error: null,
    message: null,
    response: null,
    status: 0,
    success: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    return (
      builder.addCase(fetchNewProduct.pending, (state: any) => {
        state.status = "loading";
        state.error = null;
      }),
      builder.addCase(
        fetchNewProduct.fulfilled,
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.data = payload;
        }
      ),
      builder.addCase(
        fetchNewProduct.rejected,
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.data = payload;
          console.log(payload);
        }
      )
    );
  },
});

const { actions, reducer } = submitNewProduct;
export const {} = actions;
export default reducer;
