import { createSelector, createFeatureSelector, State } from '@ngrx/store';
import { AppState } from '../../../app.state';

export const getPageType = (state: AppState) => state.auth.pageType;
