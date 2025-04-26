
import React, { useState, useEffect } from 'react';
import { XCircle } from 'lucide-react';

// Expanded name lists for more variety
const firstNames = [
  "James", "Sarah", "Michael", "Emma", "John", "Lisa", "David", "Sophia",
  "Robert", "Olivia", "William", "Isabella", "Joseph", "Mia", "Thomas",
  "Charlotte", "Daniel", "Amelia", "Matthew", "Harper", "Andrew", "Evelyn",
  "Richard", "Abigail", "Charles", "Emily", "Kevin", "Elizabeth", "Brian",
  "Sofia", "Steven", "Victoria", "Christopher", "Grace", "Timothy", "Zoe",
  "Jason", "Natalie", "Paul", "Hannah", "Mark", "Lily", "George", "Chloe",
  "Kenneth", "Ella", "Ronald", "Scarlett", "Edward", "Aria", "Justin", "Madison"
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller",
  "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez",
  "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
  "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark",
  "Ramirez", "Lewis", "Young", "Walker", "Allen", "King", "Wright", "Scott",
  "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker",
  "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Turner",
  "Phillips", "Evans", "Parker", "Edwards", "Collins"
];

const amounts = ["$150,000", "$230,000", "$500,000", "$780,000", "$1.2M", "$2.5M", "$3.7M", "$4.8M"];

// Track used names to avoid repetition
let usedNames = new Set();

const NotificationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState({
    name: "",
    amount: ""
  });

  const generateNotification = () => {
    // Reset used names if we've used too many
    if (usedNames.size > (firstNames.length * lastNames.length * 0.7)) {
      usedNames.clear();
    }
    
    let fullName = '';
    let attempts = 0;
    
    // Try to find a unique name combination
    do {
      const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
      const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
      fullName = `${randomFirst} ${randomLast}`;
      attempts++;
      
      // Prevent infinite loop
      if (attempts > 50) {
        usedNames.clear();
      }
    } while (usedNames.has(fullName) && attempts < 50);
    
    // Add this name to used set
    usedNames.add(fullName);
    
    const amount = amounts[Math.floor(Math.random() * amounts.length)];
    
    setNotification({
      name: fullName,
      amount: amount
    });
  };

  useEffect(() => {
    // Initial delay before first notification
    const initialTimeout = setTimeout(() => {
      generateNotification();
      setIsVisible(true);
      
      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }, 5000);

    // Set interval for recurring notifications
    const interval = setInterval(() => {
      generateNotification();
      setIsVisible(true);
      
      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }, 30000); // Show every 30 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 left-5 z-50 flex items-center p-4 rounded-lg shadow-lg bg-gradient-to-r from-gray-900 to-black border border-lino-yellow/30 text-white transform transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="mr-4 bg-lino-yellow rounded-full p-2 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div className="flex-1 mr-4">
        <div className="font-medium">{notification.name} just made</div>
        <div className="text-lino-yellow font-bold text-lg">{notification.amount}</div>
      </div>
      <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-white">
        <XCircle className="h-5 w-5" />
      </button>
    </div>
  );
};

export default NotificationPopup;
