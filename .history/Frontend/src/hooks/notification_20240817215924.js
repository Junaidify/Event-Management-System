export const notification = () => {
  const handleNotification = () => {
    setTimeout(() => {
      alert("Event created successfully");
    }, 3000);
  };

  return () => clearTimeout(handleNotification);

  return 
};
