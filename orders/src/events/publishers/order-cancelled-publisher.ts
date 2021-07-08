import { Subjects, Publisher, OrderCancelledEvent } from '@meocarvalho/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
