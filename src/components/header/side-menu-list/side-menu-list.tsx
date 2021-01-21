import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useTranslation } from 'react-i18next';
import { auth } from 'firebase/firebase.utils';
import { Link } from 'react-router-dom';
import AllRoutesEnum from 'core/enums/allRoutes.enum';

import classesScss from './side-menu-list.module.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

type Props = {
  closeMenu: () => void;
};

const SideMenuList: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();

  const handleClick = () => {
    setOpen(!open);
  };

  const logOut = () => {
    auth.signOut();
    props.closeMenu();
  };

  return (
    <List aria-labelledby="nested-list-subheader" className={classes.root} component="nav">
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Account name" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested} button>
            <Link className={classesScss.navLink} to={AllRoutesEnum.PROFILE}>
              <ListItemText primary="Learner home" />
            </Link>
          </ListItem>
          <ListItem className={classes.nested} button>
            <Link className={classesScss.navLink} to={AllRoutesEnum.SETTINGS}>
              <ListItemText primary="Settings" />
            </Link>
          </ListItem>
          <ListItem className={classes.nested} button onClick={() => logOut()}>
            <span className={classesScss.navLink}>
              <ListItemText primary={t('header.logout')} />
            </span>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default SideMenuList;
