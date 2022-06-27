import CounterActiveTasks from './CounterActiveTasks';
import BtnDelCompletedTasks from './BtnDelCompletedTasks';
import Filtres from './Filtres';
import { FooterStyles } from './Footer.styles';

const Footer = () => {
  return (
    <FooterStyles>
      <CounterActiveTasks />
      <Filtres
      />
      <BtnDelCompletedTasks />
    </FooterStyles>
  );
};

export default Footer;
