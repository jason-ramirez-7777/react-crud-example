import {
  Box,
  Button,
  Card,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CSSTransition, Transition } from "react-transition-group";
import { useRef, useState } from 'react';
import {motion} from 'framer-motion';

const Login = () => {



  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  return (
    <Box className="w-full flex h-full">

      <div className="w-1/2 h-full flex flex-col bg-slate-700 text-gray-50 items-center justify-center">
        <Typography variant="h2" className="mb-8">
          Welcome to here.
        </Typography>
        <Typography variant="h5" className="text-gray-300">
          This is your turn
        </Typography>

        <motion.div
          initial = {{opacity : 0, scale : 0.5}}
          animate = {{opacity : 1, scale : 1}}
          transition  = {{duration : 0.5}}
        />
        

      </div>
      <div className="w-1/2 p-16">

        <Card className="flex flex-col p-8 shadow-lg">

          


          <Typography variant="h5" className="mb-6 font-bold text-white [text-shadow:_1px_1px_4px_rgb(0_0_0_/_20%)]">
            Login
          </Typography>

          <TextField className="mb-2 w-full" label="email" />
          <TextField className="mb-2 w-full" label="password" />

          <Button variant="contained" className="bg-cyan-500 w-full">
            Submit
          </Button>

          <span className="mt-5 mb-1">Don't you have any account ? </span>
          <Link to="/register" className="text-blue-500 hover:text-blue-700">Create one now</Link>
        </Card>

      </div>
    </Box>
  );
};

export default Login;
