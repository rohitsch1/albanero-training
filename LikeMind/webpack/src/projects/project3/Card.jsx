import * as React from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import './card.scss'





export default function BasicCard(props) {
  const [open, setOpen] = React.useState(true);
  
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Card sx={{ minWidth: 275 }}>

      <CardContent>
        <ImageList sx={{ width: 500, height: 450 }}>

          <ImageListItem >
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
              srcSet="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
              alt="userTitle"
              loading="lazy"
            />
            <ImageListItemBar
              title={props.value.name}
              subtitle={<span>@: {props.value.username}</span>}
              position="below"
            />
          </ImageListItem>
        </ImageList>
        <div className='Second-Box'>
          <h3 className="User-Info">User Information : </h3>
          <List
            sx={{ width: '200%'}}
            component="nav"
            aria-labelledby="nested-list-subheader"
            
          >
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
              <HomeIcon  />
              </ListItemIcon>
              <ListItemText primary="Address" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                  <ListItemText primary={`Street : ${props.value.address.street}`}/>
                  <ListItemText primary={`Suite : ${props.value.address.suite}`}/>
                  <ListItemText primary={`City : ${props.value.address.city}`}/>
                  <ListItemText primary={`Zipcode : ${props.value.address.zipcode}`}/> 
              </List>
            </Collapse>
            <ListItemButton>
              <ListItemIcon>
              <PhoneIphoneIcon/>
              </ListItemIcon>
              <ListItemText primary={props.value.phone} />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ApartmentIcon/>
              </ListItemIcon>
              <ListItemText primary={`Company : ${props.value.company.name}`}/>
            </ListItemButton>
            
          </List>
        </div>
      </CardContent>
    </Card>
  );
}

// {
//     id:
//     name:
//     username:
//     address:{
//         street:
//         suite:
//         city:
//         zipcode:
//         geo:{
//             lat:
//             lng:
//         }
//         phone:
//         website:
//         company:{
//             nam:
//             catchPhase:
//             bs:
//         }
//     }
// }

