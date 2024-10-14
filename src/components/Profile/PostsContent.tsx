import {FC} from 'react';
import Post from "./Post.tsx";
import {SAMPLE_POST,SAMPLE_SUGGESTIONS} from'../../constants/profile.constants.ts';
import {  Typography, Box} from '@mui/material';
import WhoToFollow from "./WhoToFollow.tsx";
const PostsTabContent:FC = () => {
    return(
        <>
           <Post post={SAMPLE_POST}/>
            <Box p={2} sx={{ border: '1px solid #333', borderRadius: 1 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                    Who to follow
                </Typography>
                {SAMPLE_SUGGESTIONS.map((suggestion) =>
                    <WhoToFollow suggestion={suggestion} />)
                }
            </Box>
        </>
    )
}
export default PostsTabContent;