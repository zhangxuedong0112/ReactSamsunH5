import { observable, computed } from 'mobx';

class AppStore{
    
    @observable
    _title
    @computed
    get title(){
        return this._title
    }
    set title(props:string){
        this._title = props
    }


}

export default new AppStore()