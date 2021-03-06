import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AllRoutesEnum from 'core/enums/allRoutes.enum';
import { auth } from 'firebase/firebase.utils';
import Link from 'next/link';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './side-menu-list.styles';

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
    <S.Container>
      <List aria-labelledby="nested-list-subheader" className={classes.root} component="nav">
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Account name" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested} button>
              <Link href={`/${AllRoutesEnum.PROFILE}`}>
                <span className="navLink">
                  {' '}
                  <ListItemText primary="Learner home" />
                </span>
              </Link>
            </ListItem>
            <ListItem className={classes.nested} button>
              <Link href={`/${AllRoutesEnum.SETTINGS_PROFILE}`}>
                <span className="navLink">
                  <ListItemText primary="Settings" />
                </span>
              </Link>
            </ListItem>
            <ListItem className={classes.nested} button onClick={() => logOut()}>
              <span className="navLink">
                <ListItemText primary={t('header.logout')} />
              </span>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </S.Container>
  );
};

export default SideMenuList;
