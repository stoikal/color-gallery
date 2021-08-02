const NAME = 'colors';

const ColorStorage = {
  get() {
    const rawData = localStorage.getItem(NAME);

    if (rawData) {
      return JSON.parse(rawData);
    }
    return []; 
  },

  add(newColor: string) {
    const colorList = this.get();
    localStorage.setItem(
      NAME, 
      JSON.stringify([...colorList, newColor])
    );
  }
};

export default ColorStorage;
