import { Button, Menu } from "@mui/material";
import React from "react";

import { RiArrowDropDownLine } from "react-icons/ri";

type Props = {
  items?: any[];
  onItemClick?: (e: any) => void;
  title?: string;
  icon?: React.ReactNode;
};

function CustomMenu({ items, onItemClick, title, icon }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className='flex items-center space-x-1 cursor-pointer'>
        <Button
          sx={{
            textTransform: "none",
            cursor: "pointer",
          }}
          variant='text'
          color='inherit'
          id='basic-button'
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup='true'
          onClick={handleClick}
          aria-expanded={open ? "true" : undefined}>
          {title ? (
            <span className='flex items-center '>
              {title} <RiArrowDropDownLine size={20} className='text-primary' />
            </span>
          ) : (
            icon
          )}
        </Button>
      </div>

      <Menu
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        CustomMenu
      </Menu>
    </div>
  );
}

export default CustomMenu;
