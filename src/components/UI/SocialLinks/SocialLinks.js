import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

import classes from "./SocialLinks.module.css";

const SocialLinks = () => {
  return (
    <div className={classes.container}>
      <a href="https://www.linkedin.com/in/kevin-blair-74525935" target="blank">
        <MailIcon className={classes.icon} fontSize="large" />
      </a>
      <a href="https://www.linkedin.com/in/kevin-blair-74525935" target="blank">
        <LinkedInIcon className={classes.icon} fontSize="large" />
      </a>
      <a href="https://www.github.com/kblair40" target="blank">
        <GitHubIcon className={classes.icon} fontSize="large" />
      </a>
    </div>
  );
};

export default SocialLinks;
