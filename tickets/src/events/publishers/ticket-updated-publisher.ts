import { Publisher, Subjects, TicketUpdatedEvent } from '@meocarvalho/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}