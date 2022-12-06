import store from "../store";
import { getNum, setNum } from "../store/ornek";

export const getData = () => {
    //direk olarak stateleri alabiliriz.
    return store.getState().ornek.num;
};

export const getNumFon = () => {
    //fonksiyon gönderebiliriz.
    store.dispatch(getNum());
};

export const setNumFon = (num) => {
    store.dispatch(setNum({num: num}));
};