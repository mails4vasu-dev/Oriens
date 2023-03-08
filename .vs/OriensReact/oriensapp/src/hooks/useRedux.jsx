import { useDispatch, useSelector } from "react-redux";

function useRedux(store_key) {
    const getStates = useSelector((state) => state[store_key]);
    const dispatch = useDispatch();
    const dispatchState = (actions) => {
        dispatch(actions);
    }
    return [getStates, dispatchState]
}

export default useRedux;