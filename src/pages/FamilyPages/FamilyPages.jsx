import { motion } from 'framer-motion';
import NavigationButtons from '../../components/NavigationButtons/NavigationButtons';

const FamilyPages = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <NavigationButtons isVisible={true} />
    </div>
  );
};

export default FamilyPages;


/* <div className="relative min-h-screen w-full">
  <NavigationButtons isVisible={true} />
</div> */