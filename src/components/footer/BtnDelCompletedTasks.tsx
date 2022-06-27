import actions from '../../redux/mainReducer/main.actions';
import { useAppDispatch } from '../../redux/store';
import { Btn } from './BtnDelCompletedTasks.styles';

const BtnDelCompletedTasks: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <Btn
      onClick={() => dispatch(actions.clearCompleted())}
    >
      Clear completed
    </Btn>
  );
};

export default BtnDelCompletedTasks;
