import { AppBar, IconButton, Toolbar, Typography, InputBase, Badge, Stack, Avatar, Menu, MenuItem, Button } from '@mui/material'
import { alpha, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContrastIcon from '@mui/icons-material/Contrast';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/UserSlice';
import { selectTheme, setTheme } from '../redux/ThemeSlice';
import React, {useState} from 'react'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('lg')]: {
      width: '400px',
      '&:focus': {
        width: '600px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      '&:focus': {
        width: '200px',
      },
    }
  },
}));

const TopBar = ({user}) => {
  const dispatch = useDispatch()
  const selectedTheme = useSelector(selectTheme)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  const changeTheme = () => {
    if (selectedTheme === 'light') {
      dispatch(setTheme('dark'))
    } else {
      dispatch(setTheme('light'))
    }
  }
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar className='flex justify-between items-center'>
          <Stack direction={'row'} alignItems={'center'} >
            <IconButton>
              <FacebookIcon className='text-white' fontSize='large'/>
            </IconButton>
            <Typography variant='h6' className='text-white hidden md:block'>Facebook</Typography>
          </Stack>
          <Search className='hidden md:block' >
              <SearchIconWrapper>
                  <SearchIcon sx={{cursor: 'pointer'}} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
          </Search>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-around'}>
              <Button onClick={changeTheme}>
                <ContrastIcon className='text-white' fontSize='large'  />
              </Button>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <EmailIcon className='text-white' fontSize='large' />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon className='text-white' fontSize='large' />
                </Badge>
              </IconButton>
              <IconButton 
                id='avatar-button'
                aria-controls={open ? 'menu-list' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined} 
                onClick={handleClick} 
              >
                <Avatar src={user.profileUrl} ></Avatar>
              </IconButton>
          </Stack>
          <Menu
          id='menu-list'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          aria-labelledby="avatar-button"
          >
            <MenuItem><Button>Profile</Button></MenuItem>
            <MenuItem><Button onClick={handleLogout}>Logout</Button></MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar