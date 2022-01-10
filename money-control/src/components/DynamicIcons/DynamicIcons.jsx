import * as Icons from "react-icons/io5";

/* Your icon name from database data can now be passed as prop */
const DynamicFaIcon = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    // Return a default one
    return <Icons.IoAlertCircleOutline />;
  }

  return <IconComponent />;
};

export default DynamicFaIcon;
