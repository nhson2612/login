import { Paper, Stack, Typography, Box, Avatar, IconButton, Icon } from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import moment from 'moment'
import React, {useState} from 'react'
import CommentContainer from './CommentContainer';

const PostsCard = ({post}) => {
  const [showAll, setShowAll] = useState(false)
  const [showLess, setShowLess] = useState(true)
  const [showComments, setShowComments] = useState(null)
  return (
    <Paper sx={{p: 2, marginTop: 2}}>
        <Stack direction="row" spacing={2} alignItems={'center'} justifyContent={'space-between'} >
          <Stack direction="row" spacing={2} alignItems={'center'} >
            <Avatar src={post.userId.profileUrl} sx={{cursor: 'pointer', width: 50, height: 50}} />
            <Stack justifyContent={'flex-start'} >
              <Typography sx={{textAlign: 'left'}} variant='h6' >{post.userId.firstName} {post.userId.lastName}</Typography>
              <Typography sx={{textAlign: 'left'}} variant='caption' >{post.userId.location}</Typography>
          </Stack>
          </Stack>
          <Typography variant='caption' >{moment(post.updatedAt).fromNow()}</Typography>
        </Stack>
        <hr className='my-2' />
        {
          showAll && (
            <Stack direction="row" spacing={2} alignItems={'center'} >
                <Typography sx={{textAlign: 'left'}} variant='body1' >{post.description}
                <span 
                  onClick={() => {
                    setShowAll(false)
                    setShowLess(true)
                  }}
                  className='text-blue-500 cursor-pointer'
                >Show less</span>
              </Typography>
            </Stack>
          )
        }
        {
          showLess && (
            <Typography sx={{textAlign: 'left'}} variant='body1' >{post.description.slice(0, 300)}
              <span 
                onClick={() => {
                  setShowAll(true)
                  setShowLess(false)
                }}
                className='text-blue-500 cursor-pointer'
              >...Show more</span>
            </Typography>
          )
        }
        <hr className='my-2' />
        {
          post.image && (
            <Box>
              <img src={post.image} alt={post.image} className='w-full h-[500px] object-cover rounded-md ' />
            </Box>
          )
        }
        <hr className='my-2' />
        <Stack direction="row" spacing={2} alignItems={'center'} justifyContent={'space-between'} >
        {
          post?.likes?.includes(post.userId._id) ? (
            <Stack direction="row" alignItems={'center'} >
              <IconButton>
              <ThumbUpOffAltIcon sx={{color: 'blue'}} />
              </IconButton>
              <Typography variant='caption' >{post.likes.length} Likes</Typography>
            </Stack>
          ) : (
            <Stack direction="row" alignItems={'center'} >
              <IconButton>
                <ThumbUpOffAltIcon />
              </IconButton>
              <Typography variant='caption' >{post.likes.length} Likes</Typography>
            </Stack>
          )
        }
          <Stack direction="row" alignItems={'center'} >
            <IconButton onClick={() => showComments ? setShowComments(null) : setShowComments(post)} >
              <ChatBubbleOutlineIcon />
            </IconButton>
            <Typography variant='caption' >{post.comments.length} Comments</Typography>
          </Stack>
        </Stack>
        <hr className='my-2' />
        {
          showComments?._id === post._id && (
            <CommentContainer post={showComments}/>
          ) 
        }
    </Paper>
  )
}

export default PostsCard