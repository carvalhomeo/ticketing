import { Publisher, OrderCreatedEvent, Subjects } from '@meocarvalho/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
