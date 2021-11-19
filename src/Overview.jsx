import BarChart from "./BarChart";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import style from './Overview.css'


function Overview(){
    return (
    <div>
        <h1>
            Overview
        </h1>
        <div className="settings">
        <IconButton aria-label="Settings" size="large">
            <SettingsIcon />
        </IconButton>
        </div>
        <div>
            <BarChart />
        </div>
        <div className="">
            <Stack spacing={2} direction="row">
                <Button variant="contained">This Week</Button>
                <Button variant="contained">This Month</Button>
                <Button variant="contained">This Year</Button>
                <Button variant="contained">Total</Button>              
                <FormControlLabel control={<Checkbox defaultChecked />} label="Time spent" size="large" />
                <FormControlLabel control={<Checkbox />} label="Units" size="large" />
                <FormControlLabel control={<Checkbox />} label="Badges" size="large" />                
            </Stack>
        </div>
        <div>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Box>
        </div>
    </div>
    );
}

export default Overview;