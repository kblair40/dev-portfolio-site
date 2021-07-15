import React, { useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import ResumeIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import RingVolumeIcon from "@material-ui/icons/RingVolume";

import classes from "./MenuDial.module.css";

const MenuDial = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const actions = [
    {
      icon: <ResumeIcon fontSize="large" />,
      name: "Resume",
    },
    {
      icon: <RingVolumeIcon fontSize="large" />,
      name: "Contact",
    },
    { icon: <GitHubIcon fontSize="large" />, name: "Github" },
    { icon: <LinkedInIcon fontSize="large" />, name: "LinkedIn" },
  ];

  return (
    <div className={classes.container}>
      <Backdrop open={open} classes={{ root: classes.backdropRoot }} />
      <SpeedDial
        ariaLabel="Home page menu"
        classes={{ root: classes.speedDial, fab: classes.fab }}
        icon={
          <SpeedDialIcon
            classes={{
              root: classes.speedDialIconRoot,
              icon: classes.speedDialIcon,
              iconOpen: classes.speedDialOpen,
            }}
          />
        }
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="down"
        // open
      >
        {actions.map((action) => (
          <SpeedDialAction
            tooltipOpen
            classes={{
              root: classes.actionRoot,
              staticTooltipLabel: classes.tooltip,
              fab: classes.actionFab,
            }}
            name={action.name}
            key={action.name}
            icon={action.icon}
            tooltipTitle={<p className={classes.tooltipTitle}>{action.name}</p>}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
  );
};

export default MenuDial;
