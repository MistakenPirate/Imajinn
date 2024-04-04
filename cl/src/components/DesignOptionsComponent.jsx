import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const DesignOptionsComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const designOptions = [
    {
      id: 1,
      title: "I'm a designer looking to share my work",
      image: 'https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?size=626&ext=jpg&ga=GA1.1.59196950.1712255976',
      description: 'This is the right platform to you as a designer to broadcase your amazing craft and Imajinn-ation',
    },
    {
      id: 2,
      title: "I'm looking to hire a designer",
      image: 'https://img.freepik.com/free-vector/coworkers-cartoon-characters-effective-collaboration-coworkers-cooperation-teamwork-colleagues-discussing-solution-successful-interaction_335657-2309.jpg?size=626&ext=jpg&ga=GA1.1.59196950.1712255976',
      description: 'The Best of the designers have their portfolios on our page, Ready to get Hired!',
    },
    {
      id: 3,
      title: "I'm looking for design inspiration",
      image: 'https://img.freepik.com/free-vector/brain-with-digital-circuit-programmer-with-laptop-machine-learning-artificial-intelligence-digital-brain-artificial-thinking-process-concept-vector-isolated-illustration_335657-2246.jpg?size=626&ext=jpg&ga=GA1.1.59196950.1712255976',
      description: 'With a vast community of designers,We are the leading source for design inspiration.',
    },
  ];

  const handleOptionClick = (optionId) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
    } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
  };

  const isOptionSelected = (optionId) => {
    return selectedOptions.includes(optionId);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid pr-7 md:pr-0 md:grid-cols-3 gap-4">
        {designOptions.map((option) => (
          <div
            key={option.id}
            className={`p-4 rounded-lg shadow-md cursor-pointer transition-transform duration-300 ${
              selectedOptions.includes(option.id) ? 'scale-105' : ''
            }`}
            onClick={() => handleOptionClick(option.id)}
          >
            <img src={option.image} alt={option.title} className="w-full h-36 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold">{option.title}</h3>
            {selectedOptions.includes(option.id) && option.description && (
              <p className="text-gray-600">{option.description}</p>
            )}
            <button
              className={`bottom-2 left-2 mb-3 text-white rounded-full w-8 h-8 flex items-center justify-center bg-${isOptionSelected(option.id) ? 'blue' : 'gray'}-500`}
              onClick={(e) => {
                e.stopPropagation();
                handleOptionClick(option.id);
              }}
            >
              {isOptionSelected(option.id) && 
                
                <div className=''>
                  <FaCheck />
                  </div>
              }
            </button>
          </div>
        ))}
      </div>
      {selectedOptions.length > 0 && <p className="mt-4">Anything else? You can select multiple</p>}
    </div>
  );
};

export default DesignOptionsComponent;
