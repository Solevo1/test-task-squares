import { FC } from 'react';

import './AppError.css';

type AppErrorProps = {
  message: string | undefined;
}

const AppError: FC<AppErrorProps> = (
  { message },
) => (
  <div className='Error'>
    <p>Sorry, but site is temporary unavailable due to internal API issues</p>
    <p>{message}</p>
  </div>
);

export default AppError;
