import { Button, Typography } from "@mui/material";
import { FC } from "react";

const HomeComponent5: FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-16 bg-gray-50 dark:bg-[#222B45]">
      <Typography variant="h4" className="text-gray-900 dark:text-gray-50">
        Get Started with theFront today
      </Typography>

      <Typography className="text-gray-500 pt-4 pb-4 dark:text-gray-400">
        Build a beautiful, modern website with flexible, fully customizable,
        atomic MUI components.
      </Typography>

      <div className="flex justify-center">
        <Button variant="contained" className="mr-2 bg-blue-500 shadow-lg">
          View Pages
        </Button>
        <Button variant="outlined">Documentation</Button>
      </div>
    </div>
  );
};

export default HomeComponent5;
