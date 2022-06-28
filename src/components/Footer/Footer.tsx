import CounterActiveTasks from './components/CounterActiveTasks';
import BtnDelCompletedTasks from './components/BtnDelCompletedTasks';
import Filtres from './components/Filtres';
import { StyledFooter } from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <CounterActiveTasks />
      <Filtres />
      <BtnDelCompletedTasks />
    </StyledFooter>
  );
};

export default Footer;
