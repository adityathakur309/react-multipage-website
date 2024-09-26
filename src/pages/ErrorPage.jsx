import React from 'react';
import { NavLink, useRouteError } from 'react-router-dom';

 export const ErrorPage = () => {
    let error = useRouteError();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">{error.status}</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mt-4">there is a problem</h2>
        <p className="text-gray-600 mt-2">
          {error.data}
        </p>
        <NavLink
          to={"/"}
          className="mt-6  inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go to Home
        </NavLink>
      </div>
    </div>
  );
};

