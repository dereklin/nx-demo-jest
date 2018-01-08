import { SessionResolver } from './session-resolver';
import { HttpService } from '@nx-demo-jest/app-interfaces';

describe('SessionResolver', () => {
  it('should work', () => {
    expect(new SessionResolver({} as HttpService)).toBeDefined();
  });
});
