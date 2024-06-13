import { Dispatch } from "redux";

export const fetchDataRequest = () => ({ type: "FETCH_DATA_REQUEST" });
export const fetchDataSuccess = (data: any) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data,
});
export const fetchDataFailure = (error: string) => ({
  type: "FETCH_DATA_FAILURE",
  payload: error,
});
export const filterProducts = (title: string, category: string) => ({
  type: "FILTER_PRODUCTS",
  payload: { title, category },
});

export const fetchData = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await fetch("/db.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch(fetchDataSuccess(data.products));
    } catch (error: any) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
