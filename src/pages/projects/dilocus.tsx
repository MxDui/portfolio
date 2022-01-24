import { Fragment } from 'react';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const dilocus = () => {
  return (
    <Main
      meta={
        <Meta
          title={'Dilocus project page'}
          description={'A details page about dilocus project'}
        />
      }
    >
      <Fragment>
        <h1>aosd</h1>
      </Fragment>
    </Main>
  );
};

export default dilocus;
