import {convertTime} from "../../utils/convertDate";
import {convertNationality} from "../../utils/convertNationality"
import {Avatar, List, ListItem, ListItemText, Typography} from "@mui/material";


export const Contacts = ({picture, name, dob, email, phone, location, nat}) => {
    return (

        <List className="row">
            <ListItem>
                <Avatar src={picture.thumbnail} alt="avatar"/>
            </ListItem>

            <ListItem>
                <ListItemText>
                    <Typography variant="h6">
                        {name.first} {name.last}
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>{convertTime(dob.date)}/{dob.age}age</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText><a href={"mailto:" + email}>{email}</a></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText><a href={"tel:" + phone}>{phone}</a></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>{location.country}, {location.city}</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>{convertNationality(nat)}</ListItemText>
            </ListItem>
        </List>

    )
}
