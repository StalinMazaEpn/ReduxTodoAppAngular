import { Action } from '@ngrx/store';

export const SET_FILTER = '[FILTER] Set Filter';

export type filtersValid = 'todos' | 'pendientes' | 'completados';

export class SetFilterAction implements Action{
    readonly type = SET_FILTER;  
    constructor(public filter: filtersValid) {        
    }
}

export type actions = SetFilterAction;