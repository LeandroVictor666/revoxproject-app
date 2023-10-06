export default class CacheService {
  saveDataInSessionStorage(key: string, value: string): boolean {
    try {
      sessionStorage.setItem(key, value);
      return true;
    } catch (error) {
      return false;
    }
  }
  getDataInSessionStorage(key: string) {
    return sessionStorage.getItem(key);
  }
}
