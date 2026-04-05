import { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const AccessibilityToggle = () => {
  const [accessibilityMode, setAccessibilityMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('accessibilityMode');
    if (storedMode) {
      setAccessibilityMode(storedMode === 'true');
      document.documentElement.classList.toggle('accessibility', storedMode === 'true');
    }
  }, []);

  const toggleAccessibility = () => {
    const newMode = !accessibilityMode;
    setAccessibilityMode(newMode);
    document.documentElement.classList.toggle('accessibility', newMode);
    localStorage.setItem('accessibilityMode', newMode.toString());
  };

  return (
    <button 
      onClick={toggleAccessibility} 
      className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-[#AF3737]"
      aria-label={accessibilityMode ? 'Disable accessibility mode' : 'Enable accessibility mode'}
    >
      {accessibilityMode ? (
        <>
          <EyeOff className="w-4 h-4 text-[#AF3737]" />
          <span className="text-sm font-medium text-[#AF3737]">Disable Visual Support</span>
        </>
      ) : (
        <>
          <Eye className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-600">Enable Visual Support</span>
        </>
      )}
    </button>
  );
};

export default AccessibilityToggle;
