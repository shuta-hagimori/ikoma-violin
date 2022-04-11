import "firebase/auth";
import React, { useCallback, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import {
  AppBar,
  Drawer,
  IconButton,
  ListItemIcon,
  Toolbar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import IkomaViolin from "../img/ikomaviolin.png";
export function Header() {
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
    <div>
      <div className="header">
        <IconButton
          edge="start"
          onClick={onClickMenu}
          style={{ color: "grey", marginLeft: 20 }}
        >
          <MenuIcon />
        </IconButton>
        <img
          style={{
            textAlign: "center",
            paddingTop: 5,
            position: "fixed",
            top: 10,
            left: `calc(50% - 150px)`,
          }}
          src={IkomaViolin}
          width={300}
          alt="教室看板"
        />
      </div>
      <div onClick={setDrawerIsClosed} onKeyDown={setDrawerIsClosed}>
        <Drawer anchor="left" open={drawerIsOpen} onClose={setDrawerIsClosed}>
          <div role="presentation" style={{ width: 300 }}>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="教室紹介" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

Header.displayName = "Header";
