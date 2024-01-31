import { FC, ReactNode } from "react";
import { IconButton, Typography } from "@mui/material";

type CardPropType = {
  title: string;
  content: string;
  icon: ReactNode;
};

const HomeComponent4SubCard: FC<CardPropType> = ({ title, content, icon }) => {
  return (
    <div className="p-8 bg-white shadow-md rounded-md flex flex-col dark:bg-white dark:bg-opacity-5">
      <div>
        <IconButton
          aria-label="delete"
          size="medium"
          className="p-3 text-white bg-blue-500 hover:bg-blue-400"
        >
          {icon}
        </IconButton>
      </div>
      <Typography variant="h5" className="pt-4  pb-4 dark:text-gray-50">
        {title}
      </Typography>
      <Typography className="text-gray-500 dark:text-gray-400">
        {content}
      </Typography>
    </div>
  );
};

export default HomeComponent4SubCard;
