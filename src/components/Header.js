import {TableCell, TableHead, Typography} from "@mui/material";


export const Header = () => {
    const navItems = ["Avatar", "Full Name", "Birthday", "Email", "Phone","Location","Nationality" ]
    return (
        <TableHead>
            {navItems.map((nav, index) => {
                return(
                <TableCell key={index} align="center" >
                    <Typography variant="h5">
                        {nav}
                    </Typography>
                </TableCell>
                )
            })}
        </TableHead>
    )
}