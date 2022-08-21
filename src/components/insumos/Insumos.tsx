import { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { contextStateProps } from '../../ContextStateWrapper';
import { useLoginMutation } from '../../generated/schema';
import InsumosModal from './insumosModal/InsumosModal';
import InsumosTable from './insumosTable/InsumosTable';

const Insumos = () => {
  const { setShowModal } = useContext(contextStateProps);
  const [login] = useLoginMutation();

  // const [login] = useMutation<LoginMutation>(LOGIN);
  useEffect(() => {
    login({
      variables: {
        username: process.env.REACT_APP_USERNAME ?? '',
        password: process.env.REACT_APP_PASSWORD ?? '',
      },
    }).then(({ data }) => {
      const { tokenAuth } = data || {};
      const { token } = tokenAuth || {};
      console.log(token);
    });
  }, []);

  return (
    <>
      <h1>Insumos</h1>
      <Button onClick={() => setShowModal(true)}>Agregar insumos</Button>
      <InsumosModal />
      <InsumosTable />
    </>
  );
};

export default Insumos;
