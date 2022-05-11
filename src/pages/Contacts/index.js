import {convertTime} from "../../utils/convertDate";
import {convertNationality} from "../../utils/convertNationality"
import {
    Avatar,
    TableCell,
    TableRow,
    Typography
} from "@mui/material";


export const Contacts = ({picture, name, dob, email, phone, location, nat}) => {
    return (

        <TableRow>
            <TableCell component="th" scope="row">
                <Avatar src={picture.thumbnail} alt="avatar"/>
            </TableCell>
            <TableCell align="right">
                <Typography variant="h6">
                    {name.first} {name.last}
                </Typography>
            </TableCell>
            <TableCell align="left">{convertTime(dob.date)}/{dob.age}age</TableCell>
            <TableCell align="left"><a href={"mailto:" + email}>{email}</a></TableCell>
            <TableCell align="left"><a href={"tel:" + phone}>{phone}</a></TableCell>
            <TableCell align="left">{location.country}, {location.city}</TableCell>
            <TableCell align="right">{convertNationality(nat)}</TableCell>
        </TableRow>
    )
}
