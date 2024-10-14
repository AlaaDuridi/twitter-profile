import {Avatar, Button, Grid, IconButton, Link, Typography} from "@mui/material";
import profile from "../../assets/profile.png";
import {NotificationsOutlined, PendingOutlined} from "@mui/icons-material";
import {FollowedBy, FollowingFollowers} from "./FollwedBy.tsx";
import {FC} from 'react';
const ProfileInfo :FC = ()=>{
    return (
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
                <Grid container alignItems="center" gap={3} mt={2} direction='row'>
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
                    <FollowingFollowers/>
                    <FollowedBy/>
                </Grid>
            </Grid>
        </Grid>

    )
}
export default ProfileInfo;