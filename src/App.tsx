import './App.css'
import NavigationMenu from "./components/NavigationMenu";
import Profile from "./components/Profile";
import { Grid, } from '@mui/material';
function App() {
  return (
      <>
          <Grid container>
              {/* Left Sidebar: Navigation Menu */}
              <Grid item xs={2} sx={{ borderRight: '1px solid #333', height: '100vh', overflowY: 'auto' }}>
                  <NavigationMenu />
              </Grid>

              {/* Middle Content: Profile and Posts */}
              <Grid item xs={7} sx={{ height: '100vh', overflowY: 'auto', padding: 2 }}>
                  <Profile />
              </Grid>

              {/* Right Sidebar: Who to Follow Section */}
              <Grid item xs={3} sx={{ borderLeft: '1px solid #333', height: '100vh', overflowY: 'auto', padding: 2 }}>
                 test
              </Grid>
          </Grid>
      </>
        )

}

export default App
