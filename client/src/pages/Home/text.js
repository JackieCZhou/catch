import BouncingText from './BouncingText';

const MyBouncingText = () => {
  <BouncingText
    className={myClassName}
    text={myTextToShow} 
    clickable
    hoverable 
    delay={ms} 
    duration={ms}
  >
};

export default BouncingText;