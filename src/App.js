import './App.css';
import {Contacts} from "./pages/Contacts";
import {connect} from "react-redux";
import {getContacts as getContactsAction, setPagination} from "./redux/modules/contacts";
import {useEffect} from "react";
import {Container, Grid, Paper, Table, TableBody, TableContainer, Typography} from "@mui/material";
import {default as FilterFill} from "./components/FilterFill";
import {Header} from "./components/Header";
import {PaginationComponent} from "./components/Pagination";


function App({contacts, getContacts, filter, page, gender, nationality, setPagination}) {

    useEffect(() => {
        getContacts(gender, nationality, page)
    }, [gender, nationality, page])

    const filterContacts = (contact) => {
        if (!filter) {
            return true;
        }

        const name = contact.name.first + ' ' + contact.name.last;

        return name.toUpperCase().includes(filter.toUpperCase());
    };


    return (
        <Container>
            <Grid>
                <Typography variant="h3">
                    Contacts
                </Typography>
                <FilterFill/>

                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <Header/>
                        <TableBody>
                            {contacts.length && contacts.filter(filterContacts).map((item, index) => {
                                return <Contacts key={index} picture={item.picture} name={item.name} dob={item.dob}
                                                 email={item.email} phone={item.phone} location={item.location}
                                                 nat={item.nat}/>
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <PaginationComponent page={page} onChange={(e, value) => {
                    setPagination(value)
                }}/>
            </Grid>
        </Container>

    )
}

export default connect(
    ({contacts}) => ({
        contacts: contacts.contacts,
        filter: contacts.filter,
        page: contacts.page,
        gender: contacts.gender,
        nationality: contacts.nationality
    }),
    {
        getContacts: getContactsAction,
        setPagination: setPagination,
    }
)(App)