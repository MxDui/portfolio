import React, { Fragment } from 'react';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const almazan = () => {
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

export default almazan;
