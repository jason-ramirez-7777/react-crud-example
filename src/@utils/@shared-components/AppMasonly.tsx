import { Masonry } from "@mui/lab";
import { FC } from "react";
type AppMasonlyPropType = {
  columns: number;
  spacing: number;
  imgList: Object | any;
};

const AppMasonly: FC<AppMasonlyPropType> = ({
  columns,
  spacing,
  imgList = [],
}) => {
  return (
    <Masonry columns={columns} spacing={spacing}>
      {imgList.length &&
        imgList.map((src: string, index: number) => (
          <img key={index} src={src} className="shadow-lg rounded-md" alt = ''/>
        ))}
    </Masonry>
  );
};

export default AppMasonly;
