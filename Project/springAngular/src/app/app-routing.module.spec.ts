import { ApproutingModule } from './app-routing.module';

describe('AppRoutingModule', () => {
  let appRoutingModule: ApproutingModule;

  beforeEach(() => {
    appRoutingModule = new ApproutingModule();
  });

  it('should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });
});
