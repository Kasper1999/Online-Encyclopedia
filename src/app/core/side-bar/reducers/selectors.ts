import { createSelector, createFeatureSelector, State } from '@ngrx/store';
import { AppState } from '../../../app.state';

export const getType = (state: AppState) => state.sidebar.open; // sidebar open || closed
export const getUserAuth = (state: AppState) => state.sidebar.user; // sidebar user login || logout
