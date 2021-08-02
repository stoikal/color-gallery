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
  },

  remove(hex: string) {
    let temp = this.get();
    const index = temp.indexOf(hex);

    if (index > -1) {
      temp = [
        ...temp.slice(0, index),
        ...temp.slice(index + 1)
      ]
    }

    localStorage.setItem(
      NAME, 
      JSON.stringify(temp)
    );

  }
};

export default ColorStorage;
