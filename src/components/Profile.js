import { Avatar, Box, Button, Icon, IconButton, Paper, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EditIcon from '@mui/icons-material/Edit';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react'
import moment from 'moment';

const Profile = ({user}) => {
  return (
    <Paper sx={{p: 2}} >
        <Box className="flex items-center justify-between" >
            <Box className="flex items-center justify-center gap-2" >
                <Avatar src={user.profileUrl} sx={{cursor: 'pointer'}} />
                <Box className="flex flex-col items-center" >
                    <Typography variant="body1" color="initial" >{user.firstName} {user.lastName}</Typography>
                    <Typography variant="caption" color="initial">{user.profession??"No profession"}</Typography>
                </Box>
            </Box>
            <Box>
                    <IconButton disableRipple >
                        <EditIcon />
                    </IconButton>
            </Box>
        </Box>
        <hr className="my-2" />
        <Box>
            <Box className="flex items-center gap-2" >
                <LocationOnIcon />
                <Typography variant="body2" color="initial" >{user.location??"Add your location"}</Typography>
            </Box>
            <Box className="flex items-center gap-2" >
                <WorkIcon />
                <Typography variant="body2" color="initial" >{user.profession??"Add your profession"}</Typography>
            </Box>
        </Box>
        <hr className="my-2" />
        <Box>
            <Typography gutterBottom sx={{textAlign: 'left'}} variant="body1" color="initial" >{user?.friends?.length} friends</Typography>
            <Box className="flex items-center justify-between gap-2" >
                <Typography gutterBottom variant="body2" color="initial" >Who view your profile</Typography>
                <Typography gutterBottom variant="body2" color="initial" >{user?.views?.length}</Typography>
            </Box>
            <Typography gutterBottom sx={{textAlign: 'left'}} variant="body2" color="initial" >{user?.verified ? "Verified Account" : "Not verified"}</Typography>
            <Box className="flex items-center justify-between gap-2" >
                <Typography gutterBottom variant="body2" color="initial" >Joined</Typography>
                <Typography gutterBottom variant="body2" color="initial" >{moment(user?.createdAt).fromNow()}</Typography>
            </Box>
        </Box>
        <hr className="my-2" />
        <Box className="flex flex-col items-start" >
            <Typography gutterBottom sx={{textAlign: 'left'}} variant="body1" color="initial" >Other Social Profile</Typography>
                <Box className="flex gap-2 items-center" >
                <IconButton>
                    <InstagramIcon />
                </IconButton>
                    <Typography variant="body2" color="initial" >Instagram</Typography>
                </Box>
            <Box className="flex gap-2 items-center" >    
                <IconButton>
                    <TwitterIcon />
                </IconButton>
                <Typography variant="body2" color="initial" >Twitter</Typography>
            </Box>
            <Box className="flex gap-2 items-center" >
                <IconButton>
                    <WhatsAppIcon />
                </IconButton>
                <Typography variant="body2" color="initial" >WhatsApp</Typography>
            </Box>
        </Box>
    </Paper>
  )
}

export default Profile