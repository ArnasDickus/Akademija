import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import AllRoutesEnum from 'core/enums/allRoutes.enum';
import { auth } from 'firebase/firebase.utils';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './header-dropdown.styles';

const HeaderDropdown: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const { t } = useTranslation();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  const handleLogOut = (event: React.MouseEvent<EventTarget>) => {
    handleClose(event);
    auth.signOut();
  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <S.Root>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Account name
        </Button>
        <Popper anchorEl={anchorRef.current} open={open} role={undefined} disablePortal transition>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>
                      <Link href={`/${AllRoutesEnum.PROFILE}`}>
                        <span className="link">{t('header.learnerHome')}</span>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link href={`/${AllRoutesEnum.SETTINGS_PROFILE}`}>
                        <span className="link">{t('header.settings')}</span>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleLogOut}>
                      <span className="link">{t('header.logout')}</span>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </S.Root>
  );
};

export default HeaderDropdown;
