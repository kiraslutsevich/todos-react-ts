class LocalStorageHelper<DataType> {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  get = (): DataType => {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  };

  set(data: DataType) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }
}

export default LocalStorageHelper;
