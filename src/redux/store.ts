import { createStore, combineReducers } from 'redux';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import main from './mainReducer/main.reducer';
import filter from './filterReducer/filter.reduser';

const rootReducer = combineReducers({
  main,
  filter,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = () => useDispatch() as typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
