import React, { useMemo, useState } from 'react'
import { Avatar, Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import {postComments, posts} from '../assets/data'
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/UserSlice';
import moment from 'moment';

const CommentForm = ({user}) => {
  return (
    <Stack flexGrow={1} marginBottom={2} direction="row" alignItems={'center'} justifyContent={'space-between'} >
      <Stack direction="row" spacing={2} alignItems={'center'} flexGrow={1} >
        <Avatar src={user?.profileUrl} sx={{cursor: 'pointer', width: 50, height: 50}} />
        <TextField placeholder="Write a comment" fullWidth />
      </Stack>
      <IconButton>
        <SendIcon />
      </IconButton>
    </Stack>
  )

}

const CommmentContent = ({comment, user, setReplyComment, showAllReplies, setShowAllReplies}) => {
  return (
    <Stack marginBottom={2} direction="row" spacing={2} alignItems={'flex-start'} flexGrow={1} >
      <Avatar src={comment.userId.profileUrl}  />
      <Stack>
        <Typography sx={{textAlign: 'left'}} variant="h6">{comment.userId.firstName} {comment.userId.lastName}</Typography>
        <Typography sx={{textAlign: 'left'}} variant='caption' >{moment(comment.createdAt).fromNow()}</Typography>
        <Typography sx={{textAlign: 'left'}} variant='caption' >{comment.comment}</Typography>
        <Stack direction="row" spacing={2} alignItems={'center'} flexGrow={1} >
          {
            comment.likes.includes(user._id) ? (
              <IconButton>
                <ThumbUpOffAltIcon color="primary" />
              </IconButton>
            ) : (
              <IconButton>
                <ThumbUpOffAltIcon />
              </IconButton>
            )
          }
          <Button disableRipple size="small" onClick={() => setReplyComment(comment)} >Reply</Button>
        </Stack>
        {
              comment.replies?.length>0 && !showAllReplies ? <Typography sx={{cursor: 'pointer', textAlign: 'left'}} onClick={() =>setShowAllReplies(true)} variant='caption' >View {comment.replies.length} replies</Typography> : null
        }
      </Stack>
    </Stack>
  )

}

const CommentContainer = ({post}) => {
  const [showAllReplies, setShowAllReplies] = useState(false)
  const [replyComment, setReplyComment] = useState(null)
  const user = useSelector(selectUser)
  const comments = useMemo(() => {
    return postComments.filter(comment => comment.postId === post._id)
  }, [postComments])
  return (
    <Box>
        <CommentForm user={user} /> 
      <Stack >
        {comments.map(comment => (

            <CommmentContent key={comment._id} comment={comment} user={user} setReplyComment={setReplyComment} setShowAllReplies={setShowAllReplies} showAllReplies={showAllReplies} />
        ))}
      </Stack>
    </Box>
  )
}

export default CommentContainer