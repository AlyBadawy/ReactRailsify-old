/* eslint-disable @typescript-eslint/naming-convention */
import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { RootState } from '../store';
import {
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../features/AuthSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.jwt_token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: Record<string, unknown>
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const refreshResult = await baseQuery('/account', api, extraOptions);

    if (refreshResult?.data) {
      const state = api.getState() as RootState;
      const user_id = state.auth.user_id;
      api.dispatch(setCredentials({ user_id: user_id }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const appApi = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (_builder) => ({}),
});
