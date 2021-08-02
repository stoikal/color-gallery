const NAME = 'colors';

const ColorStorage = {
  get(): string[] {
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
    let arr = this.get();
    const index = arr.indexOf(hex);

    if (index > -1) {
      arr = [
        ...arr.slice(0, index),
        ...arr.slice(index + 1)
      ]
    }

    localStorage.setItem(
      NAME, 
      JSON.stringify(arr)
    );

  }
};

export default ColorStorage;
