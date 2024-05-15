
import { motion } from 'framer-motion';
import { useState } from 'react';

const Practise = () => {
  const [currentNode, setCurrentNode] = useState(0); // Current node index
  const nodePositions = [
    { x: 100, y: 100 },
    { x: 200, y: 200 },
    { x: 300, y: 300 },
    { x: 400, y: 400 }
  ]; // Example node positions

  const handleNext = () => {
    if (currentNode < nodePositions.length - 1) {
      setCurrentNode(currentNode + 1);
    }
  };

  return (
    <div>
      <motion.svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx={nodePositions[currentNode].x}
          cy={nodePositions[currentNode].y}
          r="20"
          fill="blue"
          initial={false} // Do not animate initial position
          animate={{ x: nodePositions[currentNode].x, y: nodePositions[currentNode].y }}
        />
      </motion.svg>

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Practise;
