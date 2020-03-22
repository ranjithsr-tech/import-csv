import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'import-csv'`, () => {
    expect(component.title).toEqual('import-csv');
  });

  it('should render title', () => {
    const mockData = {
      srcElement: {
        files: [{ name: 'issues.csv' }],
        target: { files: [new File([''], 'issues.csv', { type: 'text/csv' })] }
      }
    }
    component.uploadListener(mockData);
    expect(component.uploadListener).toBeTruthy();
  });
});
