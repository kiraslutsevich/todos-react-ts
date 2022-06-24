import React from 'react';

export type FilterValue = 'all' | 'active' | 'completed';

export type SetFilter = React.Dispatch<React.SetStateAction<FilterValue>>

export interface Task {
  text: string;
  isCompleted: boolean;
  id: number;
}
