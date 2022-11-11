import React from 'react';
import{Typography, AppBar, Card, CardActions, CardMedia, CardContent, CssBaseline, Grid, Toolbar,Container, Button} from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons';
import './App.css'



const cards =[1,2,3,4,5,6,7,8,9]
const App=()=>{
    return(
       <>
        <CssBaseline>
            <AppBar position='relative'>  
                <Toolbar>
                    <PhotoCamera className='icon'/>
                    <Typography variant='h6'>
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className='container' >
                <div>
                    <Container maxWidth='sm' style={{marginTop:'100px'}}>
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                           Photo Album
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Hello everyone this is photo album dbuuqhdk nbjhoeiw bixjx biuhcewnd heuhiew bkkuwchio bbiuweydoi bhdwedk
                        </Typography>
                        <div className='buttons'>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                        Secondary Action
                                    </Button>
                                </Grid>


                            </Grid>
                        </div>
                    </Container>
                </div>

                {/* cards */}

                <Container className='cardgrid' maxWidth="md">
                    <Grid container spacing={4}>
                        {/* loop over images */}

                        {cards.map((cards)=>(

                            <Grid item key={cards} xs={12} sm={6} md={4} >
                            <Card className='card'>
                                <CardMedia className='cardmedia'  image="https://source.unsplash.com/random"  title="Image title"/>
                                <CardContent className='content'>
                                    <Typography variant='h5' gutterBottom>
                                        Heading

                                    </Typography>
                                    <Typography >
                                      this is a media cndnjkwsn knwlkqdlkqw qwqndkkqwj

                                    </Typography>

                                </CardContent>

                                <CardActions>
                                    <Button size='small' color='primary' >View</Button>
                                    <Button size='small' color='primary' >Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                          
                        ))}


                        
                        
                      


                    </Grid>
                    
                </Container>
               
            </main>

            <footer className='footer'>
                 <Typography variant='h6' align='center' gutterBottom>
                    Footer

                 </Typography>
                 <Typography variant='subtitle1' align='center' color='textSecondary'>
                    Something here to give footer a purpose

                 </Typography>
            </footer>
            
        </CssBaseline>
       </>
    )
}

export default App;