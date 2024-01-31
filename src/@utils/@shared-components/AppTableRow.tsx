import { TableCell, TableHead, TableRow } from "@mui/material";
import { FC } from "react";



const AppTableRow: FC = ({ items }) => {

    return <TableRow>
        {
            Object.keys(items).map((item: any, index: number) => {
                return <TableCell key={index}>
                    {items[item]}
                </TableCell>
            })
        }
    </TableRow>
}

export default AppTableRow;