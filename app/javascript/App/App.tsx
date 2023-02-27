import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '../components/Layoput';
import { Home } from '../components/home/Home';
import { UnsignedRoute } from '../components/auth/UnsignedRouted';
import { Dashboard } from '../components/dashboard/Dashboard';
import { PrivateRoute } from '../components/auth/PrivateRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Any Person route */}
        <Route index element={<Home />} />

        {/* un-signed in routes */}
        <Route element={<UnsignedRoute />}>
          {/* <Route path="login" element={<Login />} /> */}
        </Route>

        {/* Private routes */}
        <Route element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};
