import { Button, Typography } from "@mui/material";
import { FC } from "react";
import AppMasonly from "./../../@utils/@shared-components/AppMasonly";
import styled from "@emotion/styled";

const Gallery = styled.div`
  width: 600px;
  transform : translate(50px,-30px) rotateX(-0deg) rotateY(0deg) rotateZ(-20deg);
`;

const imgList = [
  "./imgs/img1--dark.png",
  "./imgs/img4--dark.png",
  "./imgs/img7--dark.png",
  "./imgs/img10--dark.png",
  "./imgs/img12--dark.png",
  "./imgs/img13--dark.png",
  "./imgs/img17--dark.png",
  "./imgs/img24--dark.png",
]

const HomeComponent1: FC = () => {
  return (
    <div className="w-full flex overflow-hidden relative pt-32 bg-gradient-to-b from-white to-gray-100 dark:from-[#222B45] dark:to-[#1B2138]">
      <div className="w-1/2 flex flex-col p-32">
        <Typography variant="h2" className="text-strone-100 font-bold dark:text-gray-50">
          Turn your ideas <br />
          into <span className="text-blue-500">success.</span>
        </Typography>
        <Typography variant="h6" className="pt-10 pb-10 dark:text-gray-200">
          theFront will make your product look modern and professional while
          saving you precious time.
        </Typography>

        <div className="flex">
          <Button variant="contained" className="mr-2 bg-blue-500">
            View Pages
          </Button>
          <Button variant="outlined">Documentation</Button>
        </div>
      </div>

      <Gallery className="absoute">
        <AppMasonly spacing = {2} columns = {3} imgList= {imgList}/>
      </Gallery>
    </div>
  );
};

export default HomeComponent1;
