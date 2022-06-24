import TYPES from './filter.actionTypes';
import { FilterValue } from '../../utils/types';

export default {
  setFilter: (payload: FilterValue) => ({ type: TYPES.SET_FILTER, payload }),
};
