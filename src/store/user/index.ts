import { action, observable, runInAction, computed, toJS } from 'mobx';
import req from "@/service/req"

export interface userStoreObj{
    userName: string,
    pwd: string,
    header: string,
}
export class UserStore {
    @observable
    user:userStoreObj

    @action
    setUser(user){
        this.user = user
    }
}

export default new UserStore()