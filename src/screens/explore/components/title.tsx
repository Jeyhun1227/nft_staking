import { theme } from "@/config/theme";
import {
  Typography,
  Menu,
  MenuItem,
  Stack,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Check from "@mui/icons-material/Check";

const options = ["Artists", "NFT’s", "Festivals"];

interface Props {
  anchorEl: HTMLElement | null;
  handleClickListItem: (event: React.MouseEvent<HTMLElement>) => void;
  handleMenuItemClick: (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => void;
  handleClose: () => void;
  selectedIndex: number;
}

export const ExploreTitle = ({
  anchorEl,
  selectedIndex,
  handleClickListItem,
  handleClose,
  handleMenuItemClick,
}: Props) => {
  const open = Boolean(anchorEl);

  return (
    <Stack direction="row" alignItems="center" spacing="22px">
      <Typography
        variant="headline2"
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            fontSize: 30,
          },
        })}
      >
        Explore
      </Typography>
      <Box>
        <List aria-label="Device settings">
          <ListItem
            button
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
            sx={{
              color: "#42A4FF",
              padding: 0,
            }}
          >
            <ListItemText
              sx={{
                color: "#42A4FF",
                padding: 0,
              }}
              primary={
                <Typography
                  variant="headline2"
                  sx={(theme) => ({
                    [theme.breakpoints.down("md")]: {
                      fontSize: 30,
                    },
                  })}
                >
                  {options[selectedIndex]}
                </Typography>
              }
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
            style: {
              backgroundColor: "rgba(25, 18, 37, 1)",
            },
          }}
          sx={{
            "& .MuiMenu-paper": {
              backgroundColor: "rgba(25, 18, 37, 1)",
              boxShadow:
                "0px 2px 4px rgba(0, 0, 0, 0.1), 0px 12px 28px rgba(0, 0, 0, 0.2)",
              borderRadius: "12px",
              color: "white",
            },
            //
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
              sx={{
                ...theme.typography.title3,
                backgroundColor: "transparent",
              }}
            >
              {option}
              {index === selectedIndex && (
                <ListItemIcon sx={{ color: "#42A4FF", marginLeft: "16px" }}>
                  <Check />
                </ListItemIcon>
              )}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Stack>
  );
};
