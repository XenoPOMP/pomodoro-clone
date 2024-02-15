import { createSlice } from '@reduxjs/toolkit';

import type { ReduxAction } from '@redux/types';

import { SECONDS_IN_MINUTE } from '@utils/time';

export type TimerContext = {
  time: number;
  stage: 'not-started';
};

const initialState: TimerContext = {
  time: SECONDS_IN_MINUTE * 25,
  stage: 'not-started',
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {},
});

export default timerSlice.reducer;
export const {} = timerSlice.actions;
export const initialTimerContext = timerSlice.getInitialState();
