import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);
const dummyMemberData = [
  { name: 'Shaun Tung' },
  { name: 'Ted Chen' },
  { name: 'Ian Lin' },
  { name: 'Michelle Lin' },
  { name: 'Alan Lin' },
];

const Members = () => {
  const classes = useStyles();
  const church = { name: 'Philadelphia' };

  return (
    <Paper>
      <List dense className={classes.root}>
        <ListSubheader>{`List of ${church.name} church members`}</ListSubheader>
        {dummyMemberData.map((member, index) => {
          const labelId = `checkbox-list-secondary-label-${index}`;
          return (
            <Draggable key={member} draggableId={index} index={index}>
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar alt={`Avatar n°${index + 1}`} />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={member.name} />
                <ListItemSecondaryAction></ListItemSecondaryAction>
              </ListItem>
            </Draggable>
          );
        })}
      </List>
    </Paper>
  );
};

export default Members;
