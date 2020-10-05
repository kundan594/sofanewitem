import { Subject } from 'rxjs';

const subject = new Subject();

export  const PreviewDataService = {
    setData: d => subject.next({ value: d }),
    clearData: () => subject.next(),
    getData: () => subject.asObservable()
};



const subject2 = new Subject();

export const messageService = {
    sendMessage: message => subject2.next({ text: message }),
    clearMessages: () => subject2.next(),
    onMessage: () => subject2.asObservable()
};