import React, {useState} from 'react'
import Profile from '../components/Profile'
import TopBar from '../components/TopBar'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/UserSlice'
import Friends from '../components/Friends'
import FriendsRequest from '../components/FriendsRequest'
import { friends, posts } from '../assets/data'
import FriendsSuggestion from '../components/FriendsSuggestion'
import { Avatar, Button, Input, Paper, Stack, TextField, Typography } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PostsCard from '../components/PostsCard'


const Home = () => {
  const user = useSelector(selectUser)
  const [friendsRequests, setFriendsRequests] = useState(friends)
  const [friendsSuggestions, setFriendsSuggestions] = useState(friends)
  return (
    <div>
      <TopBar user={user} />
      <div className='grid grid-cols-4 gap-5 p-5'>
        <div className='col-span-1 h-screen w-full'>
          <Profile user={user} />
          <Friends user={user} />
        </div>
        <div className='col-span-2 h-screen w-full' >
          <Paper sx={{p: 2}} >
            <Stack direction="row" spacing={2} alignItems={'center'} >
              <Avatar src={user.profileUrl} />
              <TextField placeholder="What's on your mind" fullWidth />
            </Stack>
            <hr className='my-2' />
            <Stack direction="row" alignItems={'center'} justifyContent={'space-between'} >
              <Button disableRipple startIcon={<ImageIcon />} >
              <input type="file" id="file" className='hidden' />
              <label htmlFor="file" className='cursor-pointer'>Upload File</label>
              </Button>
              <Button disableRipple startIcon={<VideocamIcon />} >Video</Button>
              <Button disableRipple startIcon={<GifBoxIcon />} >Gif</Button>
              <Button variant="contained" >Post</Button>
            </Stack>
          </Paper>
          {
            posts?.length > 0 ? (<Paper>
              {
                posts.map((post, index) => (
                  <PostsCard key={index} post={post} user={user} />
                ))
              }
            </Paper>) : (<Paper>
              <Typography variant='h6' >No Posts Yet</Typography>
            </Paper>)
          }
        </div>
        <div className='col-span-1 h-screen w-full '>
          <FriendsRequest friends={friendsRequests} />
          <FriendsSuggestion friends={friendsSuggestions} />
        </div>
      </div>
    </div>
  )
}

export default Home