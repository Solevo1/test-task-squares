import { AppPreset } from './types';

export const api = {
  async fetchAppPresets(): Promise<AppPreset[]> {
    const response = await fetch('https://demo7919674.mockable.io');
    const data = await response.json();
    return data;
  },
};
