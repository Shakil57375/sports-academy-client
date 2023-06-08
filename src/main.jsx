import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <div className="max-w-7xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </React.StrictMode>
      </QueryClientProvider>
    </AuthProvider>
  </HelmetProvider>
);
