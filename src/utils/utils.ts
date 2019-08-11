export const generateUUID = () => {
  var d = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
      d += performance.now();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      // eslint-disable-next-line no-mixed-operators
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}