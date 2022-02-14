  const saveCartItems = (input) => {
localStorage.setItem('carItems', input);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
