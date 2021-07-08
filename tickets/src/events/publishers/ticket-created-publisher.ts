import { Publisher, Subjects, TicketCreatedEvent } from '@meocarvalho/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}