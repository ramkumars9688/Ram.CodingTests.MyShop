import { TestBed } from '@angular/core/testing';
import { SessionStorageService } from './session-storage.service';

describe('SessionStorageService', () => {
  let key = 'testKey';
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionStorageService = TestBed.get(SessionStorageService);
    expect(service).toBeTruthy();
  });

  it('should store and retrieve value', () => {
    const service: SessionStorageService = TestBed.get(SessionStorageService);
    let data = [{name:'Test1'}, {name: 'Test2'}];
    service.setItem(key, data)

    expect(service.getItem(key)).toEqual(data);
  });

  it('removeItem should remove cart data from session storage', () => {
    const service: SessionStorageService = TestBed.get(SessionStorageService);
    let data = [{name:'Test1'}, {name: 'Test2'}];
    service.setItem(key, data)
    service.removeItem(key);
    expect(service.getItem(key)).toBeNull();
  });

});
