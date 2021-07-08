import { Subjects, Publisher, ExpirationCompleteEvent } from '@meocarvalho/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}