const useClock = () => {
  // TODO
  // refer readme.md for what to return

  let date = new Date(); 
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();


  return { hours, minutes, second}
 
};

export default useClock;
