import {Box, Tab, Tabs} from "@mui/material";
import {useState, FC, SyntheticEvent} from "react";
import PostsContent from "./PostsContent.tsx";

const MyTabs :FC = ()=>{
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleChange = (_event:SyntheticEvent, newValue:number) => {
        setActiveTab(newValue);
    };
    const renderTabContent = () => {
        switch (activeTab) {
            case 0:
                return <PostsContent />;
            case 1:
                return <>Replies Content</>;
            case 2:
                return <>Media Content</>;
            case 3:
                return <>Likes Content</>;
            default:
                return <PostsContent />;
        }
    };
    return(
        <>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
                value={activeTab}
                onChange={handleChange}
                variant="fullWidth"
                textColor="primary"
                indicatorColor="primary"
                aria-label="profile tabs"
            >
                <Tab label="Posts" sx={{ textTransform: 'none' }}/>
                <Tab label="Replies" sx={{ textTransform: 'none' }}/>
                <Tab label="Media" sx={{ textTransform: 'none' }}/>
                <Tab label="Likes" sx={{ textTransform: 'none' }} />
            </Tabs>
            {renderTabContent()}
        </Box>
        </>
    )
}
export default MyTabs;