import { MessageService } from "./message.service";

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(()=>{
    // service = new MessageService();
  })

  it('should have no messages to start', ()=>{
    service = new MessageService();

    expect(service.messages.length).toBe(0);
  })

  it('should have messages in the add method', () => {
    service = new MessageService();

    service.add('Message 1');

    expect(service.messages.length).toBe(1);
  })

  it('should remove all messages when clear is called', () => {
    service = new MessageService();
    service.add('Message 1');

    service.clear();

    expect(service.messages.length).toBe(0);
  })
})
