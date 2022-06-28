import { clearCompleted } from '../../../redux/mainReducer/todoSlice';
import { useAppDispatch } from '../../../redux/store';
import { Btn } from './BtnDelCompletedTasks.styles';

const BtnDelCompletedTasks: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <Btn
      onClick={() => dispatch(clearCompleted())}
    >
      Clear completed
    </Btn>
  );
};

export default BtnDelCompletedTasks;
