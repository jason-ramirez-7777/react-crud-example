import { Avatar, Typography } from "@mui/material";
import { FC } from "react";

const HomeComponentFooter: FC = () => {
  return (
    <div className="w-full flex flex-col pt-8 pb-8 pl-32 pr-32 border-t border-gray-400 text-gray-500 dark:text-gray-400 dark:bg-[#222B45]">
      <div className="w-full pt-8 pb-8 flex">
        <Avatar src="./imgs/logo.jpg" sx={{ width: 24, height: 24 }} />
        <div className="pl-4">theFront</div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <Typography>theFront. 2020, Bernard reserved</Typography>

        <Typography>
          When you visit or interact with me, I will provide you a beautiful
          designed, effective product.
        </Typography>
      </div>
    </div>
  );
};

export default HomeComponentFooter;
