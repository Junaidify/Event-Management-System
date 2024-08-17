export const notification = ({modal, time}) => {
  const handleNotification = () => {
    setTimeout(() => {
      
    }, time);
  };

  return () => clearTimeout(handleNotification);


};
