import { AdsClick, AutoStories, CodeOff } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { FC } from "react";

const HomeComponent2: FC = () => {
  return (
    <div className="w-full flex flex-col items-center pt-32 dark:bg-[#222B45]">
      <Typography variant="h4" className="font-bold dark:text-gray-50">
        Build accessible React apps with speed
      </Typography>

      <Typography
        variant="h6"
        className="pt-6 pb-6 text-gray-500 dark:text-gary-400"
      >
        Build a beautiful, modern website with flexible, fully customizable,
        automic MUI components.
      </Typography>

      <div className="flex justify-between p-10 pl-32 pr-32 text-center">
        <div className="flex flex-col p-4 items-center">
          <IconButton
            className="bg-blue-600 text-gray-50 p-4 bg-opacity-80 hover:bg-blue-600 hover:bg-opacity-60"
            size="medium"
          >
            <AdsClick />
          </IconButton>
          <Typography variant="h5" className="pb-6 pt-6 dark:text-gray-50">
            Build for developers
          </Typography>
          <Typography className="text-gray-500 dark:text-gray-400">
            theFront is build to make your life easier. Variables, build
            tooling, documentation, and resuable components.
          </Typography>
        </div>

        <div className="flex flex-col p-4 items-center">
          <IconButton
            className="bg-blue-600 text-gray-50 p-4 bg-opacity-80 hover:bg-blue-600 hover:bg-opacity-60"
            size="medium"
          >
            <AutoStories />
          </IconButton>
          <Typography variant="h5" className="pb-6 pt-6 dark:text-gray-50">
            Designed to be modern
          </Typography>
          <Typography className="text-gray-500 dark:text-gray-400">
            Designed with the latest design trends in mind. theFront feels
            modern, minimal, and beautiful.
          </Typography>
        </div>

        <div className="flex flex-col p-4 items-center">
          <IconButton
            className="bg-blue-600 text-gray-50 p-4 bg-opacity-80 hover:bg-blue-600 hover:bg-opacity-60"
            size="medium"
          >
            <CodeOff />
          </IconButton>
          <Typography variant="h5" className="pb-6 pt-6 dark:text-gray-50">
            Documentation for everything
          </Typography>
          <Typography className="text-gray-500 dark:text-gray-400">
            We've written extensive documentation for components and tools, so
            you neer have to reverse enginner anything.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent2;
