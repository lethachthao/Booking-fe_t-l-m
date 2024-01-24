'use client';

import FormUser from '../_components/form/form-user';
import useAddAccont from '../_hooks/use-add-account';

const AddAccount = () => {
  const { mutate } = useAddAccont();
  const addUserHanlder = (value) => {
    mutate(value);
  };

  return <FormUser onSubmit={addUserHanlder} />;
};

export default AddAccount;
