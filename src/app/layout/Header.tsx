import { FC, useEffect, useState } from "react";
import AppMuiSwitch from "../../@utils/@shared-components/AppMuiSwitch";
import { getTheme, toggleTheme } from "../../@utils";
import { Avatar, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const Header: FC = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(getTheme() === "dark");

  const navigator = useNavigate();

  useEffect(() => {
    darkTheme === true
      ? toggleTheme({ dark: true })
      : toggleTheme({ dark: false });
  }, [darkTheme]);

  const handleThemeMode = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className="w-full flex fixed justify-between items-center  h-16  text-slate-800 pt-10 pb-10 dark:bg-slate-800 dark:text-white z-10 bg-white">
      <div className="flex pl-32 items-center">
        <Avatar src="./imgs/logo.jpg" sx={{ width: 56, height: 56 }} />
        <Typography variant="h5" className="pl-5 text-stone-900 dark:text-gray-50">
          React + Redux + Ts
        </Typography>
      </div>
      <div className="flex items-center">
        <Button variant="contained" className="mr-1 bg-blue-500 " onClick={() => { navigator('/login') }}>
          Login
        </Button>
        <Button variant="contained" className='bg-blue-500'>Register</Button>
        <AppMuiSwitch checked={darkTheme} onChecked={() => handleThemeMode()} />
      </div>
    </div>
  );
};

export default Header;
