import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

interface SvgProps {
  className?: string;
}

const Icon: React.FC<SvgProps> = props => {
  return (
    <SvgIcon viewBox="0 0 1000 1000" {...props}>
      <path d="M514.46 11.53C289.81 35.96 111.24 208.31 78.98 431.81c-5.3 36.17-5.3 101.15 0 135.94 16.59 111.75 68.66 212.22 149.31 288.02 144.93 136.64 354.38 172.35 535.95 91.48 49.54-22.12 100.23-56.45 136.4-92.4 17.28-17.28 20.28-21.43 22.58-31.57 2.07-8.99 2.07-14.29 0-23.04-2.54-10.83-8.53-17.28-147.01-155.99L631.97 499.78l144.24-144.7c141.94-141.94 144.47-144.7 147.24-156.45 2.3-9.91 2.07-14.05-.92-24.19-2.76-10.14-6.45-15.21-20.28-28.57-36.63-35.71-77.65-64.29-125.12-87.33-46.08-22.58-89.86-36.4-138.94-44.01-27.88-4.38-96.31-5.99-123.73-3zm10.6 200.46c34.33 17.51 50.23 63.13 33.64 97.01-12.91 26.5-34.79 41.01-63.83 42.86-23.27 1.15-40.32-5.07-55.99-20.74-16.13-16.13-21.2-28.57-21.2-52.53 0-16.82.92-21.43 6.45-32.72 17.98-36.64 64.76-52.54 100.93-33.88z" />
    </SvgIcon>
  );
};

export default Icon;