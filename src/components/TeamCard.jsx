import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { makeStyles, createStyles } from '@material-ui/core/styles';

const TeamCard = ({ name, members }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {name}
      <List dense>
        {members.map((member, index) => {
          return <ListItem key={index}>{member}</ListItem>;
        })}
      </List>
    </div>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
  })
);

export default TeamCard;
