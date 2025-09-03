import FormController from './FormControllers';

const RegisterForm = () => {
  const fields = [
    { label: 'Username', name: 'username', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Password', name: 'password', type: 'password' },
    { label: 'Confirm Password', name: 'confirmPassword', type: 'password' },
  ];

  const handleRegisterSubmit = (formData: { [key: string]: string }) => {
    console.log('Register data:', formData);
    // Aquí podrías hacer una petición a la API para registrar al usuario
  };

  return (
    <FormController 
      fields={fields} 
      onSubmit={handleRegisterSubmit} 
      buttonLabel="Register"
    />
  );
};

export default RegisterForm;
