import mainSelectores from '../../redux/mainReducer/main.selects';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { toggleAll } from '../../redux/mainReducer/todoSlice';
import { Button } from './ToggleAll.styles';

const ToggleAll: React.FC = () => {
  const { activeCounter } = useAppSelector(mainSelectores.getFilteredTasksWithCount);
  const dispatch = useAppDispatch();
  return (
    <Button
      onClick={() => dispatch(toggleAll(activeCounter))}
    >
      ❯
    </Button>
  );
};

export default ToggleAll;
