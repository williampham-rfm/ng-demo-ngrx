import { Action } from "@ngrx/store";

export class ApplicationAction implements Action {
    public readonly type: string;
    public payload?: any;
}
export const INIT_STATE = {
    type: ''
};
export const RESET_STATE = 'RESET_STATE';

export const CUSTOMERS_ACTIONS = {
    FECTCH_CUSTOMERS: 'FECTCH_CUSTOMERS',
    FECTCH_CUSTOMERS_SUCCESS: 'FECTCH_CUSTOMERS_SUCCESS',
    FECTCH_CUSTOMERS_ERROR: 'FECTCH_CUSTOMERS_ERROR',

    CREATE_CUSTOMER: 'CREATE_CUSTOMER',
    CREATE_CUSTOMER_SUCCESS: 'CREATE_CUSTOMER_SUCCESS',
    CREATE_CUSTOMER_ERROR: 'CREATE_CUSTOMER_ERROR',
}
export const MEMBERS_ACTIONS = {
    FECTCH_MEMBERS: 'FECTCH_MEMBERS',
    FECTCH_MEMBERS_SUCCESS: 'FECTCH_MEMBERS_SUCCESS',
    FECTCH_MEMBERS_ERROR: 'FECTCH_MEMBERS_ERROR',

    OPEN_MODAL_CREATE: 'OPEN_MODAL_CREATE',
    CLOSE_MODAL_CREATE: 'CLOSE_MODAL_CREATE',
    OPEN_MODAL_DELETE: 'OPEN_MODAL_DELETE',
    CLOSE_MODAL_DELETE: 'CLOSE_MODAL_DELETE',
    OPEN_MODAL_UPDATE: 'OPEN_MODAL_UPDATE',
    CLOSE_MODAL_UPDATE: 'CLOSE_MODAL_UPDATE',

    CREATE_MEMBERS: 'CREATE_MEMBERS',
    CREATE_MEMBERS_SUCCESS: 'CREATE_MEMBERS_SUCCESS',
    CREATE_MEMBERS_ERROR: 'CREATE_MEMBERS_ERROR',

    DELETE_MEMBERS: 'DELETE_MEMBERS',
    DELETE_MEMBERS_SUCCESS: 'DELETE_MEMBERS_SUCCESS',
    DELETE_MEMBERS_ERROR: 'DELETE_MEMBERS_ERROR',

    UPDATE_MEMBERS: 'UPDATE_MEMBERS',
    UPDATE_MEMBERS_SUCCESS: 'UPDATE_MEMBERS_SUCCESS',
    UPDATE_MEMBERS_ERROR: 'UPDATE_MEMBERS_ERROR',

    RESET_STATE: 'MEMBERS_ACTIONS_RESET'
}
export const EMPLOYEE_ACTIONS = {
    GET: 'EMPLOYEE_ACTIONS_GET',
    GET_SUCCESS: 'EMPLOYEE_ACTIONS_GET_SUCCESS',
    GET_ERROR: 'EMPLOYEE_ACTIONS_GET_ERROR',
    CREATE: 'EMPLOYEE_ACTIONS_CREATE',
    CREATE_SUCCESS: 'EMPLOYEE_ACTIONS_CREATE_SUCCESS',
    CREATE_ERROR: 'EMPLOYEE_ACTIONS_CREATE_ERROR',
    UPDATE: 'EMPLOYEE_ACTIONS_UPDATE',
    UPDATE_SUCCESS: 'EMPLOYEE_ACTIONS_UPDATE_SUCCESS',
    UPDATE_ERROR: 'EMPLOYEE_ACTIONS_UPDATE_ERROR',
    DELETE: 'EMPLOYEE_ACTIONS_DELETE',
    DELETE_SUCCESS: 'EMPLOYEE_ACTIONS_DELETE_SUCCESS',
    DELETE_ERROR: 'EMPLOYEE_ACTIONS_DELETE_ERROR',
    RESET: 'EMPLOYEE_ACTIONS_RESET'
}