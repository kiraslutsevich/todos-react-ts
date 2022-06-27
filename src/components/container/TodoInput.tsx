import { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { Form } from './TodoInput.styles';
import actions from '../../redux/mainReducer/main.actions';

const TodoInput: React.FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    dispatch(actions.addTodo(value.trim()));
    setValue('');
  };

  return (
    <Form
      onSubmit={onSubmit}
    >
      <input
        placeholder='What needs to be done?'
        className="input"
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
      />
      <button
        className="btn"
        type="submit"
      >
        +
      </button>
    </Form>
  );
};

export default TodoInput;
