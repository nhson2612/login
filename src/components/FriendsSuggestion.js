import { Paper, Typography, Box, Button, Avatar, IconButton } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import React from 'react'

const FriendsSuggestion = ({friends}) => {
  return (
    <Paper sx={{p: 2, marginTop: 2}} >
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography variant="body1" color="initial" >Friends Suggestion</Typography>
        </Box>
        <hr className='my-2' />
        <Box className="flex flex-col gap-2" >
          {friends.map((friend, index) => (
            <Box key={index} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Box className="flex items-center gap-2" >
                <Avatar src={friend.profileUrl} sx={{cursor: 'pointer'}} />
                <Typography variant="body1" color="initial" >{friend.firstName} {friend.lastName}</Typography>
              </Box>
              <Box sx={{display: 'flex'}}>
                  <IconButton >
                    <PersonAddIcon />
                  </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
    </Paper>
  )
}

export default FriendsSuggestion