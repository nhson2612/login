import { Box, Paper, Typography, Avatar } from '@mui/material'
import React from 'react'

const Friends = ({user}) => {
  return (
    <Paper sx={{p: 2, marginTop: 2}} >
        <Box className="flex items-center justify-between" >
            <Typography variant="body1" color="initial" >Friends</Typography>
            <Typography variant="body2" color="initial" >{user?.friends.length}</Typography>
        </Box>
        <hr className="my-2" />
        <Box className="flex flex-col items-start justify-center gap-2" >
            {user?.friends?.map((friend, index) => (
                <Box key={index} className="flex items-center gap-2" >
                    <Avatar src={friend.profileUrl} sx={{cursor: 'pointer'}} />
                    <Typography variant="body2" color="initial" >{friend.firstName} {friend.lastName}</Typography>
                </Box>
            
            ))}
        </Box>
    </Paper>
  )
}

export default Friends