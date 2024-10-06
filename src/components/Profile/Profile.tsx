import {
    Button,
    Typography,
    Avatar,
    Grid,
    IconButton,
    Link,
    Divider
} from '@mui/material';
import { PendingOutlined, NotificationsOutlined } from '@mui/icons-material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import profile from '../../assets/profile.png';
import reactBG from '../../assets/reactBG.jpg';

const Profile = () => {
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
            <Grid container direction="column" p={2} position="relative">
                <Avatar
                    src={profile}
                    alt="profile personal photo"
                    sx={{
                        width: 96,
                        height: 96,
                        position: 'absolute',
                        top: '-48px',
                        left: 16,
                        border: '3px solid white',
                    }}
                />
                {/* Buttons */}
                <Grid container justifyContent="flex-end" gap={2} mt={2}>
                    <IconButton>
                        <PendingOutlined fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <NotificationsOutlined fontSize="small" />
                    </IconButton>
                    <Button variant="contained" size="small">
                        Following
                    </Button>
                </Grid>

                {/* Main Profile Info */}
                <Grid container direction="column" mt={6}>
                    <Typography variant="h5" fontWeight="bold">
                        React
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        @reactjs
                    </Typography>
                    <Typography variant="body2" mt={1}>
                        The library for web and native user interfaces
                    </Typography>

                    {/* Links and Stats */}
                    <Grid container alignItems="center" gap={3} mt={2}>
                        <Grid item container alignItems="center" gap={1}>
                            <Typography variant="body2">
                                <Link href="https://react.dev/" underline="hover" color="primary">
                                    react.dev
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item container alignItems="center" gap={1}>
                            <Typography variant="body2" color="textSecondary">
                                Joined July 2013
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* Follow Stats */}
                    <Grid container alignItems="center" gap={3} mt={2}>
                        <Typography variant="body2">
                            <strong>267</strong> Following
                        </Typography>
                        <Typography variant="body2">
                            <strong>708.1K</strong> Followers
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/* Divider */}
            <Grid item>
                <Divider sx={{ my: 2 }} />
            </Grid>

            {/* Placeholder for Posts Section */}
            <Grid container direction="column" p={2}>
                <Typography variant="h6" fontWeight="bold">
                    Posts
                </Typography>
                {/* Map over posts here */}
            </Grid>
        </Grid>
    );
};

export default Profile;
