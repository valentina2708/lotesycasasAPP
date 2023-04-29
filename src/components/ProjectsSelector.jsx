import { Card, CardContent, CardActionArea, Box, Grid, Typography, Divider } from '@mui/material';
import NavLinks from "../utils/NavLinks";
import { Link } from 'react-router-dom';

export default function ProjectsSelector() {
	return (
		<Grid
			container
			spacing='40px'
			alignItems='center'
			justifyContent='center'
			mt={3}
      height={'100vh'}
		>
			{NavLinks.map((item) => (
        <Grid item key={item.title}>
          <Link to={item.link} className="nav-link">
            <CardActionArea sx={{color: "primary.light"}}>
              <Card
                elevation={4}
                sx={{ minWidth: 275, minHeight: 300, padding: "16px" }}
              >
                <CardContent sx={{ maxWidth: "300px" }}>
                  <Typography variant="h5" color={'primary'} fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Box my="16px">
                    <Divider />
                  </Box>
                  <Typography variant="body1">{item.description}</Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Link>
        </Grid>
      ))}
		</Grid>
	);
}
