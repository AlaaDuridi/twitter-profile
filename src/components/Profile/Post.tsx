import { Grid, Avatar, Typography, IconButton, Box } from '@mui/material';
import { ChatBubbleOutline,IosShare, Repeat, FavoriteBorder, BarChart ,RepeatRounded } from '@mui/icons-material';
import {IPost}from '../../types/models/posts.model';
import {FC} from 'react';
interface IPostProps {
    post:IPost;
}
const Post :FC<IPostProps> = ({ post }) => {
    return (
        <Box p={2} borderBottom="1px solid #333">
            {/* Repost Indicator */}
            {post.reposted && (
                <Box display="flex" alignItems="center" mb={1}>
                    <RepeatRounded fontSize="small" sx={{ color: 'gray', mr: 1 }} />
                    <Typography variant="caption" color="gray">
                        {post.re_poster} reposted
                    </Typography>
                </Box>
            )}
            <Grid container spacing={2}>
                {/* User Avatar */}
                <Grid item>
                    <Avatar src={post.avatar} alt={post.author} />
                </Grid>

                {/* Post Content */}
                <Grid item xs>
                    <Box>
                        {/* User Info */}
                        <Typography variant="subtitle2" fontWeight="bold">
                            {post.author} <Typography component='span' style={{ color: 'gray' }}>@{post.handle} - {post.date}</Typography>
                        </Typography>

                        {/* Post Text */}
                        <Typography variant="body1" color="textPrimary" sx={{ mt: 1 }}>
                            {post.content}
                        </Typography>
                    </Box>

                    {/* Post Actions */}
                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
                        {/* Replies */}
                        <IconButton>
                            <ChatBubbleOutline fontSize="small" />
                            <Typography variant="caption" sx={{ ml: 1 }}>
                                {post.replies}
                            </Typography>
                        </IconButton>

                        {/* Retweets */}
                        <IconButton>
                            <Repeat fontSize="small" />
                            <Typography variant="caption" sx={{ ml: 1 }}>
                                {post.retweets}
                            </Typography>
                        </IconButton>

                        {/* Likes */}
                        <IconButton>
                            <FavoriteBorder fontSize="small" />
                            <Typography variant="caption" sx={{ ml: 1 }}>
                                {post.likes}
                            </Typography>
                        </IconButton>

                        {/* Views */}
                        <IconButton>
                            <BarChart fontSize="small" />
                            <Typography variant="caption" sx={{ ml: 1 }}>
                                {post.views}
                            </Typography>
                        </IconButton>
                        {/*share*/}
                        <IconButton>
                            <IosShare fontSize="small" />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Post;
