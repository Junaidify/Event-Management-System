export const notification = ({time}) => {
  const handleNotification = () => {
    setTimeout(() => {
      
    }, 3000);
  };

  return () => clearTimeout(handleNotification);


};
