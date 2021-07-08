import { PaymentCreatedEvent, Publisher, Subjects } from "@meocarvalho/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}