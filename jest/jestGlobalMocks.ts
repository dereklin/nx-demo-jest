import * as $ from 'jquery';
(<any>window).jQuery = (<any>window).$ = $;

const mock = () => {
  let storage = {};
  return {
    getItem: key => key in storage ? storage[key] : null,
    setItem: (key, value) => storage[key] = value || '',
    removeItem: key => delete storage[key],
    clear: () => storage = {},
    getStorage: () => storage
  };
};

Object.defineProperty(window, 'localStorage', {value: mock()});
Object.defineProperty(global, 'localStorage', {value: mock()});
Object.defineProperty(window, 'sessionStorage', {value: mock()});
Object.defineProperty(global, 'sessionStorage', {value: mock()});

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ['-webkit-appearance']
});
Object.defineProperty(global, 'getComputedStyle', {
  value: () => ['-webkit-appearance']
});
Object.defineProperty(window, 'CSS', {value: mock()});

// import 'owl.carousel';
