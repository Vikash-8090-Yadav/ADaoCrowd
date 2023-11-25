import Header from "./Header";
import themes from "./themes";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { useState, createContext } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAlchemy } from "../Hooks/Connection";
const App = createContext();
import { useEffect } from 'react'
const Layout = ({ children }) => {
  const {provider,smartAccount, smartAccountAddress,connect} = useAlchemy();
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  
  useEffect(() => {
    connect();

    return () => {
    };
  }, []); 


  return (
    <App.Provider value={{ changeTheme, theme }}>
      <ThemeProvider theme={themes[theme]}>
        <ToastContainer />
        <LayoutWrapper>
          <GlobalStyle />
          <Header />
          {children}
        </LayoutWrapper>
      </ThemeProvider>
    </App.Provider>
  );
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
`;

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  background-image: ${(props) => props.theme.bgImage};
  color: ${(props) => props.theme.color};
`;

export default Layout;
export { App };