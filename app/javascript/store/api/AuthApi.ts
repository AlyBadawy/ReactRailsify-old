import { appApi } from './AppApi';

type UserLoginData = {
  username: string;
  password: string;
};

export const AuthApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credential: UserLoginData) => ({
        url: '/sessions',
        method: 'POST',
        body: { ...credential },
      }),
    }),
  }),
});

export const { useLoginMutation } = AuthApi;
