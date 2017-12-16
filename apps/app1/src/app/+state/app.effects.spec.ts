import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { readAll, hot } from '@nrwl/nx/testing';
import { AppEffects } from './app.effects';
import { of } from 'rxjs/observable/of';
import { marbles } from "rxjs-marbles";

describe('AppEffects', () => {
  let actions;
  let effects: AppEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [AppEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(AppEffects);
  });

  describe("someEffect", () => {
    it("should work", marbles(async(m) => {
      actions = hot('-a-|', { a: { type: 'LOAD_DATA' } });
      expect(await readAll(effects.loadData)).toEqual([{ type: 'DATA_LOADED', payload: {} }]);
    }));
  });

  describe("someEffect", () => {
    it("should work with m.hot", marbles(async(m) => {
      actions = m.hot('-a-|', { a: { type: 'LOAD_DATA' } });
      expect(await readAll(effects.loadData)).toEqual([{ type: 'DATA_LOADED', payload: {} }]);
    }));
  });
  
});
