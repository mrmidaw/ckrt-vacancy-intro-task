import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import explorerReducer from '../features/explorerSlice';

const store = configureStore({
    reducer: {
        explorer: explorerReducer
    },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;