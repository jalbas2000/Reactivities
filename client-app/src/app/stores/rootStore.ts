import { createContext } from 'react';
import ActivityStore from './activityStore';
import UserStore from './userStore';
import { configure } from 'mobx';
import CommomStore from './commonStore';
import ModalStore from './modalStore';

configure({enforceActions: 'always'});

export class RootStore {
    activityStore: ActivityStore;
    userStore: UserStore;
    commonStore: CommomStore;
    modalStore: ModalStore

    constructor() {
        this.activityStore = new ActivityStore(this);
        this.userStore = new UserStore(this);
        this.commonStore = new CommomStore(this);
        this.modalStore = new ModalStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore());