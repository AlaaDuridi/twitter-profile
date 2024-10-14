import {IPost} from "../types/models/posts.model.ts";
import {ISuggestion} from "../types/models/suggestions.model.ts";

export const SAMPLE_POST : IPost = {
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

export const SAMPLE_SUGGESTIONS :ISuggestion[] = [
    {
        id: 1,
        avatar: '',
        name: 'freeCodeCamp.org',
        handle: '@freeCodeCamp',
        description:
            "We're a community of millions of people who are building new skills and getting new jobs together. A 501(c)(3) public charity.",
        followers: 'Node.js and 9 others follow',
    },
    {
        id: 2,
        avatar: '',
        name: 'TypeScript',
        handle: '@typescript',
        description:
            "TypeScript is a language for application-scale JavaScript development. It's a typed superset of JavaScript.",
        followers: 'Node.js and 5 others follow',
    },
    {
        id: 3,
        avatar: '',
        name: 'Tailwind CSS',
        handle: '@tailwindcss',
        description:
            'The utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML.',
        followers: 'Yazeed Obaid and 3 others follow',
    },
]