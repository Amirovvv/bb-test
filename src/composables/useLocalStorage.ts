// export class LocalStorageService {
//   private key: string;

//   constructor(key: string) {
//     this.key = key;
//   }

//   clear() {
//     localStorage.removeItem(this.key);
//   }

//   setData(data: Record<string, any>) {
//     // this.clear()
//     const res = this.getData<any>();
//     localStorage.setItem(this.key, JSON.stringify({ ...res, ...data }))

//   }

//   getData<T>(): T {
//     return JSON.parse(localStorage.getItem(this.key) || '')
//   }

// }