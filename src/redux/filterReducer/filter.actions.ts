import TYPES from './filter.actionTypes';
import { FilterValue } from '../../utilites/types';

export default {
  setFilter: (payload: FilterValue) => ({ type: TYPES.SET_FILTER, payload }),
};
