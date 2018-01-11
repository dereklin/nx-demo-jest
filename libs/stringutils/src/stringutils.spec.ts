import { parseHostPath } from './stringutils';

xdescribe('Stringutils', () => {
  describe('parseHostPath', () => {
    it('should return /apps/app1/', () => {
      const expected = '/apps/app1/';
      let pathname = '/apps/app1/';
      let result = parseHostPath(pathname);
      expect(result).toBe(expected);
      pathname = '/apps/app1/main';
      result = parseHostPath(pathname);
      expect(result).toBe(expected);
    });
    it('should return /', () => {
      const expected = '/';
      let pathname = '/';
      let result = parseHostPath(pathname);
      expect(result).toBe(expected);
      pathname = '/main';
      result = parseHostPath(pathname);
      expect(result).toBe(expected);
    });
  });
});
