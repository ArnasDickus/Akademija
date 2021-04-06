import React from 'react';

import classes from './button-link.module.scss';

type Props = {
  children: string;
};

const ButtonLink: React.FC<Props> = ({ children }) => {
  return <button className={classes.button}>{children}</button>;
};

export default ButtonLink;
