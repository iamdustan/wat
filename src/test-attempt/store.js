
const Store = {
  store:  {
    item: {},
    singularName: 'Name',
    incrementer: 0
  },
};

setInterval(() => {
  Store.store.incrementer++;
}, 1000);

export default Store;

