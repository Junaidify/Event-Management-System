export const notification = ({time}) => {
  const handleNotification = () => {
    setTimeout(() => {
      
    }, time);
  };

  return () => clearTimeout(handleNotification);


};
