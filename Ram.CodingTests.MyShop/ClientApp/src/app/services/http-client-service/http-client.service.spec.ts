import { async, getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientService } from './http-client.service';

describe('HttpClientService', () => {
  let service: HttpClientService;
  let httpTestingController: HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: 'BASE_URL', useValue: 'mockendpoint' }
      ]
    });
    const testbed = getTestBed();
    service = testbed.get(HttpClientService);
    httpTestingController = testbed.get(HttpTestingController);

  }));

  afterEach(() => {
    httpTestingController.verify();
  });

  function mockHttpCall(httpUrl: string, httpMethod: string, responseData: any) {
    const req = httpTestingController.expectOne(httpUrl);
    expect(req.request.method).toBe(httpMethod);
    req.flush(responseData);
  }

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data from http endpoint', () => {
    const mockData = [{ Name: 'Test1' }, { Name: 'Test2' }];

    service.get('api/testaction').subscribe(data => {
      expect(data).toBe(mockData);
    });

    mockHttpCall('api/testaction', 'GET', mockData);

  });

  it('should post data to http endpoint', () => {
    const mockData = [{ Name: 'Test1' }, { Name: 'Test2' }];
    const mockResponse = { Name: 'Test1' };

    service.post('api/testaction', mockData).subscribe(data => {
      expect(data).toEqual(mockResponse);
    });

    mockHttpCall('api/testaction', 'POST', mockResponse);

  });

});
