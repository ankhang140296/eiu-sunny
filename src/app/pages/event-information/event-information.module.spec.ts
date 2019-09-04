import { EventInformationModule } from './event-information.module';

describe('EventInformationModule', () => {
  let eventInformationModule: EventInformationModule;

  beforeEach(() => {
    eventInformationModule = new EventInformationModule();
  });

  it('should create an instance', () => {
    expect(eventInformationModule).toBeTruthy();
  });
});
