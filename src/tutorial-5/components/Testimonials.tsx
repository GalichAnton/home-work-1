import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import PersonIcon from '@mui/icons-material/Person';
import { FunctionComponent } from 'react';
import { ITestimonial } from '../App';
import { Typography } from '@mui/material';


export const Testimonials: FunctionComponent<{ testimonials: ITestimonial[], onClick: Function }> = ({ testimonials, onClick }): JSX.Element => {
  return (
    <List sx={{
      width: '100%',
      maxWidth: 300,
      bgcolor: 'background.paper',
      padding: '10px',
      border: '1px solid #868282',
      borderRadius: '5px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'auto'
    }}>
      <h2>Отзывы :</h2>
      {
        testimonials.map((item, i) => {
          return (
            <>
              <ListItem key={i} alignItems="flex-start">
                <ListItemAvatar>
                  <PersonIcon />
                </ListItemAvatar>
                <ListItemText
                  primary={item.fullName}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'flex' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.text}
                      </Typography>
                      {item.createdAt}
                    </>}
                />
                <button
                  id={i+''}
                  onClick={(e) => onClick(e.currentTarget.id)}
                >
                  X
                </button>
              </ListItem>
            </>)
        })
      }
      <Divider variant="inset" component="li" />
    </List>
  );
}
