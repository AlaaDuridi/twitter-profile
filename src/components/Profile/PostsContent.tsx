import {FC} from 'react';
import {IPost} from '../../types/models/posts.model.ts';
import Post from "./Post.tsx";

const PostsTabContent:FC = () => {
    const SAMPLE_POST : IPost = {
        avatar: '',
        author: 'danabramov.bsky.social',
        handle: 'dan_abramov',
        date: 'May 29',
        content: 'happy 10th birthday to @reactjs 🎉🎂',
        replies: 46,
        retweets: 675,
        likes: 3701,
        views: '1.1M',
        reposted:true,
        re_poster:'React'
    };
    return(
        <Post post={SAMPLE_POST}/>
    )
}
export default PostsTabContent;