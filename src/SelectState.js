import React, { useState,useEffect } from 'react';
import { Select, MenuItem } from '@material-ui/core/';
import "./SelectState.css";
import Grid from '@material-ui/core/Grid';
import Container from  '@material-ui/core/Container';
import Paper from  '@material-ui/core/Paper';
import Typography from  '@material-ui/core/Typography';
import axios from 'axios';

const SelectState = () => {
    const [state, setstate] = useState(1);
    const [city, setcity] = useState(1);
    const UpdateState = (e) => {
        setstate(e.target.value);
    }
    const Updatecity = (e) => {
        setcity(e.target.value);
    }

    useEffect(() => {
        async function getData(){
            const res=await axios.get(`http://ec2-13-233-35-164.ap-south-1.compute.amazonaws.com:8080/city`,{
                headers: {
                  'Content-type': 'application/json'
                }
               });
            console.log(res);
        }
        getData();
    });

    return (
        <> 
        <Container>
        <Typography className="heading">
                Bussiness Of The Town
            </Typography>
            <Grid container className="grid_container" spacing={1} justify="center">
                <Grid item lg={4}>
                    <Typography>Select State</Typography>
                    <Select value={state}
                        onChange={UpdateState}
                        displayEmpty
                        className="display">
                        <MenuItem value="">
                            <em>Select State</em>
                        </MenuItem>
                        <MenuItem value={1}>Delhi</MenuItem>
                        <MenuItem value={2}>Mumbai</MenuItem>
                        <MenuItem value={3}>Kolkata</MenuItem>
                    </Select>
                </Grid>
                <Grid item lg={4}>
                <Typography>Select City</Typography>
                <Select value={city}
                        onChange={Updatecity}
                        displayEmpty
                        className="display">
                        <MenuItem value="">
                            <em>Select State</em>
                        </MenuItem>
                        <MenuItem value={1}>Delhi</MenuItem>
                        <MenuItem value={2}>Mumbai</MenuItem>
                        <MenuItem value={3}>Kolkata</MenuItem>
                    </Select>
                </Grid>
            </Grid>
        </Container>
        </>
    )
}

export default SelectState;