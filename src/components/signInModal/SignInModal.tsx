import { useContext, useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { contextStateProps } from '../../ContextStateWrapper';
import { useLoginMutation } from '../../generated/schema';

const SignInModal = () => {
  const { showSignInModal, setShowSignInModal } = useContext(contextStateProps);
  const [username, setUsername] = useState<string>(process.env.REACT_APP_USERNAME ?? '');
  const [password, setPassword] = useState<string>(process.env.REACT_APP_PASSWORD ?? '');
  const [login] = useLoginMutation();

  const handleInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const inputValue = event.target.value;

    switch (event.target.name) {
      case 'username':
        setUsername(inputValue);
        break;
      case 'password':
        setPassword(inputValue);
        break;
      default:
        throw Error('Input does not exist');
    }
  };

  const handleSubmitUserLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({
      variables: {
        username,
        password,
      },
    })
      .then(({ data }) => {
        const { tokenAuth } = data || {};
        const { token } = tokenAuth || {};
        setUsername(process.env.REACT_APP_USERNAME ?? '');
        setPassword(process.env.REACT_APP_PASSWORD ?? '');
        setShowSignInModal(false);

        console.log(token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal
      show={showSignInModal}
      onHide={() => {
        setUsername(process.env.REACT_APP_USERNAME ?? '');
        setPassword(process.env.REACT_APP_PASSWORD ?? '');
        setShowSignInModal(false);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmitUserLogin}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              type='text'
              name='username'
              defaultValue={username}
              onChange={handleInputs}
            />
            {/* <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text> */}
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type='password'
              name='password'
              defaultValue={password}
              onChange={handleInputs}
            />
          </Form.Group>
          {/* <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group> */}
          <div className='d-grid gap-2'>
            <Button variant='primary' type='submit' className='mt-2'>
              Sign in
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SignInModal;
