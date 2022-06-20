interface LocalStorageConstructor {
  new(name: string): LocalStorageHelper;
}
interface LocalStorageHelper {
  name: string;
  get(): [];
  set(data: string[]): void;
}

class LocalStorageHelper implements LocalStorageHelper {
  constructor(name: string) {
    this.name = name;
  }
  get() {
    return JSON.parse(localStorage.getItem(this.name) || '[]');
  }
  set(data: string[]) {
    localStorage.setItem(this.name, JSON.stringify(data));
  }
}
export default LocalStorageHelper;