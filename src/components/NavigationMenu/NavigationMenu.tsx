import XIcon from '@mui/icons-material/X';
import {Button,Divider,Typography, Avatar, Box, Link, List, ListItem, Grid, useTheme} from '@mui/material';
import {HEADER_ITEMS} from '../../constants/header.constants';
const NavigationMenu = () =>{
    const theme = useTheme();
    return (
<Grid container direction='column' height={'90vh'} justifyContent={'space-between'} sx={{border:'2px solid red'}} p={theme.spacing(2)} >
<Box>
    <Link href="#">
       <XIcon/>
    </Link>
<Divider/>

    <List>
        {HEADER_ITEMS.map((item) => (
        <ListItem key={item.text}>
            <Link underline="none" href="#">
              <Grid item  container direction='row' justifyContent='flex-start' gap={3}>
                  <Grid item>
                        <item.icon/>
                  </Grid>
                  <Grid item >
                      <Typography>{item.text}</Typography>
                  </Grid>
              </Grid>
            </Link>
        </ListItem>
            ))}
    </List>
    <Box mt={theme.spacing(2)}>
        <Button fullWidth variant={'contained'} sx={{borderRadius:'50px', mt:theme.spacing(2)}}>Post</Button>
    </Box>
</Box>

    <Grid container direction="row" alignItems="center">
        <Link href="#">
            <Grid item>
                <Avatar />
            </Grid>
        </Link>

        <Grid item>
            <Box ml={2}>
                <Typography>Mohammad Dwika...</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    @MohammadDwika...
                </Typography>
            </Box>
        </Grid>
    </Grid>

</Grid>
    );
}
export default NavigationMenu ;