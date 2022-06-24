class LocalStorageHelper<DataType> {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  get = (): DataType => {
    let receivedData = localStorage.getItem(this.key);
    if (typeof receivedData !== 'string') {
      receivedData = 'false';
    }
    return JSON.parse(receivedData);
  };

  set(data: DataType) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }
}

export default LocalStorageHelper;
