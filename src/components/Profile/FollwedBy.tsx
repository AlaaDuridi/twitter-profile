import {Grid, Avatar,Typography} from '@mui/material';
import {FC} from 'react';
 export const FollowedBy = ()=>{
    return (
        <Grid container alignItems="center" gap={1}>
            {/* Avatars with overlap */}
            <Grid item sx={{ display: 'flex' }}>
                <Avatar
                    src={'path-to-avatar-1'}
                    alt="user image 1"
                    sx={{ width: 24, height: 24, zIndex: 3 }}
                />
                <Avatar
                    src={'path-to-avatar-2'}
                    alt="user image 2"
                    sx={{ width: 24, height: 24, marginLeft: '-8px', zIndex: 2 }}
                />
                <Avatar
                    src={'path-to-avatar-3'}
                    alt="user image 3"
                    sx={{ width: 24, height: 24, marginLeft: '-8px', zIndex: 1 }}
                />
            </Grid>

            {/* Text */}
            <Grid item>
                <Typography
                    fontSize={"0.8rem"}
                    color="rgb(102, 102, 102)"
                    variant="subtitle2"
                >
                    Followed by User 1, User 2 💫 and 7 others you follow
                </Typography>
            </Grid>
        </Grid>
    )
}

export const FollowingFollowers :FC = ()=>{
     return (
         <Grid container item  gap={2}>
             <Typography variant="body2">
                 <strong>267</strong> Following
             </Typography>
             <Typography variant="body2">
                 <strong>708.1K</strong> Followers
             </Typography>
         </Grid>
     )
}
