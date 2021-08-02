import firebase from "firebase/app";
import "firebase/auth";
import React, { useCallback, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import DvrIcon from "@material-ui/icons/Dvr";
import ChatIcon from "@material-ui/icons/Chat";
import {
  AppBar,
  Drawer,
  IconButton,
  ListItemIcon,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    button: {
      marginRight: theme.spacing(2),
    },
    list: {
      width: 250,
    },
  })
);

export function Header() {
  const classes = useStyles();
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const onClickMenu = useCallback(() => {
    setDrawerIsOpen(true);
  }, []);

  const setDrawerIsClosed = useCallback(() => {
    setDrawerIsOpen(false);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={onClickMenu}
            style={{ color: " #49BFC9" }}
          >
            <MenuIcon />
            Menu
          </IconButton>
        </Toolbar>
      </AppBar>
      <div onClick={setDrawerIsClosed} onKeyDown={setDrawerIsClosed}>
        <Drawer anchor="left" open={drawerIsOpen} onClose={setDrawerIsClosed}>
          <div role="presentation" className={classes.list}>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="教室紹介" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DvrIcon />
                </ListItemIcon>
                <ListItemText primary="名簿" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ChatIcon />
                </ListItemIcon>
                <ListItemText primary="掲示板" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

Header.displayName = "Header";
