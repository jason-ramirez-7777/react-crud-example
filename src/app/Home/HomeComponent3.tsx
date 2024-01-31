import { Typography } from "@mui/material";
import { FC } from "react";

const HomeComponent3: FC = () => {
  return (
    <div className="w-full flex justify-center  text-center pt-16 dark:bg-[#222B45]">
      <div className="flex flex-col w-[512px] items-center">
        <Typography variant="h4" className="font-bold dark:text-gray-50">
          Build tools and full documentation
        </Typography>

        <Typography className="text-gray-500 pt-8 pb-8 dark:text-gray-400">
          Components, plugins, and build tools are all throughly documented with
          live examples and markup for easier use and customization.
        </Typography>

        <img
          src="./imgs/install-part.png"
          className="w-full rounded-lg shadow-sm"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeComponent3;
