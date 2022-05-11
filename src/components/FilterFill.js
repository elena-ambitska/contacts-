import {Box, Button, MenuItem, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import "../App.css"
import {connect} from "react-redux";
import {
    setFilter as setFilterAction, setGender, setNationality
} from "../redux/modules/contacts";
import {convertNationality} from "../utils/convertNationality";

const FilterFill = ({setFilter, filter, setGender, gender, setNationality, nationality}) => {

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };
    const handleChange = (event) => {
        setFilter(event.target.value)
    };
    const handleChangeNationality = (event) => {
        setNationality(event.target.value)
    };

    const genders = [
        {
            value: "male",
            label: "male"
        },
        {
            value: "female",
            label: "female"
        }];
    const nationalities = ["AU", "BR", "CA", "CH", "DE", "DK", "ES", "FI", "FR", "GB", "IE", "IR", "NO", "NL", "NZ", "TR", "US"];

    const clearFilter = () => {
        setFilter("")
        setGender("")
        setNationality("")

    }
    return (
        <Box
            component="form">
            <div className="form">
                <div className="wrapper">
                    <TextField id="outlined-basic" value={filter} onChange={handleChange} label="Full name" variant="outlined"
                               placeholder="Search by the full name" className="form-filter"/>
                    <Button variant="outlined" endIcon={<SearchIcon/>} className="btn-filter">
                    </Button>
                </div>

                <div className="wrapper">
                    <TextField id="outlined-select-currency-native"
                               fullWidth
                               select
                               placeholder="Gender"
                               value={gender}
                               onChange={handleChangeGender}
                               label="Gender">
                        {genders.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}

                    </TextField>
                </div>
                <div className="wrapper">
                    <TextField id="outlined-basic" select onChange={handleChangeNationality} fullWidth
                               label="Nationality"
                               value={nationality}
                               placeholder="Nationality">
                        {nationalities.map(nat => {
                            return (<MenuItem key={nat} value={nat}>{convertNationality(nat)}</MenuItem>)
                        })}

                    </TextField>

                </div>
                <div className="wrapper">
                    <Button variant="text" onClick={clearFilter} endIcon={<CloseIcon/>}> Clear </Button>
                </div>
            </div>
        </Box>
    )
}

export default connect(
    ({contacts}) => ({contacts: contacts.contacts, filter: contacts.filter, gender: contacts.gender, nationality: contacts.nationality}),
    {
        setFilter: setFilterAction,
        setGender: setGender,
        setNationality: setNationality
    }
)(FilterFill);
