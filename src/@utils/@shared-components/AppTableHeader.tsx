import { TableCell, TableHead, TableRow } from "@mui/material";
import { FC } from "react";


interface HeaderItemType {
    content: string;
    align: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    className: string;
}


interface Props {
    headerItems: HeaderItemType[];
}

const AppTableHeader: FC<Props> = ({ headerItems }) => {

    return <TableHead>
        <TableRow>
            {
                headerItems.map((item: HeaderItemType, index: number) => {
                    return (<TableCell align={item.align} className={item.className} key={index} >
                        {item.content}
                    </TableCell>)
                })
            }
        </TableRow>
    </TableHead>
}

export default AppTableHeader;