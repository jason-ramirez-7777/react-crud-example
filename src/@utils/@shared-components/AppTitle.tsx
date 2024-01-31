import { Typography } from "@mui/material";


export default function AppTitle({ children }) {
    return (<div className="text-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
        {children}
    </div>)
}