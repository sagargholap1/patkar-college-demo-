import React from "react";

// Types
import type { AppProps } from "next/app";

// Global Styles
import "../styles/globals.scss";

// Auth0
import { UserProvider } from "@auth0/nextjs-auth0";

// Components
import MainLayout from "../components/Common/MainLayout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </UserProvider>
  );
};

export default App;
