import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import ResumeIcon from "@material-ui/icons/Description";
// import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import RingVolumeIcon from "@material-ui/icons/RingVolume";

import classes from "./MenuDial.module.css";

const actions = [
  { icon: <ResumeIcon fontSize="large" />, name: "Resume" },
  //   Change phone icon to email icon if changing functionality to open email
  { icon: <RingVolumeIcon fontSize="large" />, name: "Contact" },
  { icon: <GitHubIcon fontSize="large" />, name: "Github" },
  { icon: <LinkedInIcon fontSize="large" />, name: "LinkedIn" },
];

const MenuDial = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <Backdrop open={open} />
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
