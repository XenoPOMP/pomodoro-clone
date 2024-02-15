import { createSlice } from '@reduxjs/toolkit';

import type { ReduxAction } from '@redux/types';

import { DEFAULT_TIMER_TIME, SECONDS_IN_MINUTE } from '@utils/time';

export type TimerContext = {
  time: number;
  stage: 'not-started' | 'started' | 'paused';
  stageHistory: Array<TimerContext['stage']>;
};

const initialState: TimerContext = {
  time: 0,
  stage: 'not-started',
  stageHistory: [],
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    changeStage(state, { payload }: ReduxAction<TimerContext['stage']>) {
      state.stage = payload;

      state.stageHistory.push(payload);
    },

    changeTime(state, { payload }: ReduxAction<TimerContext['time']>) {
      state.time = payload;
    },
  },
});

export default timerSlice.reducer;
export const { changeStage, changeTime } = timerSlice.actions;
export const initialTimerContext = timerSlice.getInitialState();
