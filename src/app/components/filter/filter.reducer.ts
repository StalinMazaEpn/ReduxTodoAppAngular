import * as fromFilter from './filter.actions';
import { InitialState } from '@ngrx/store/src/models';

const initialState: fromFilter.filtersValid = 'todos';

export function filterReducer(state = initialState,
    action: fromFilter.actions): fromFilter.filtersValid {
    switch (action.type) {
        case fromFilter.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}