import {FC} from 'react';
import {
    Typography,
    Grid,
    IconButton,
} from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import reactBG from '../../assets/reactBG.jpg';
import ProfileInfo from "./ProfileInfoSecion.tsx";
import MyTabs from "./Tabs.tsx";
const Profile : FC = () => {

    return (
        <Grid container direction="column">
            {/* Top Bar */}
            <Grid container alignItems="center" gap={2} p={2}>
                <IconButton>
                    <ArrowBackOutlinedIcon />
                </IconButton>
                <Grid item>
                    <Typography variant="h6">React</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        2,611 posts
                    </Typography>
                </Grid>
            </Grid>

            {/* Profile Cover */}
            <Grid item>
                <img src={reactBG} alt="profile cover" style={{ width: '100%' }} />
            </Grid>

            {/* Profile Info Section */}
             <ProfileInfo/>

            {/* Posts*/}
            <Grid container direction="column" p={2}>
                <MyTabs/>
            </Grid>
        </Grid>
    );
};

export default Profile;
