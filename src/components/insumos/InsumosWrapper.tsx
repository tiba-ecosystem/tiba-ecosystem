import React from 'react';
import Insumos from './Insumos';
import InsumosContext from './InsumosContext';

const InsumosWrapper = () => {
  return (
    <InsumosContext>
      <Insumos />
    </InsumosContext>
  );
};

export default InsumosWrapper;
