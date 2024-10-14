import {ISuggestion} from "../../types/models/suggestions.model.ts";
import {FC} from 'react';
import {  Avatar, Typography, Button, Box, Link } from '@mui/material';
interface IWhoToFollowProps {
    suggestion:ISuggestion;
}

const WhoToFollow : FC<IWhoToFollowProps> = ({suggestion}) =>{
return (
    <Box key={suggestion.id} display="flex" alignItems="center" mb={2}>
        {/* Avatar */}
        <Avatar src={suggestion.avatar} alt={suggestion.name} sx={{ width: 48, height: 48 }} />

        {/* Information */}
        <Box ml={2} flexGrow={1}>
            <Typography variant="subtitle1" fontWeight="bold">
                {suggestion.name}{' '}
                <Link href="#" underline="none" color="textSecondary">
                    {suggestion.handle}
                </Link>
            </Typography>
            <Typography variant="caption" color="textSecondary">
                {suggestion.followers}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {suggestion.description}
            </Typography>
        </Box>

        {/* Follow Button */}
        <Button variant="outlined" size="small">
            Follow
        </Button>
    </Box>
)
}
export default WhoToFollow;