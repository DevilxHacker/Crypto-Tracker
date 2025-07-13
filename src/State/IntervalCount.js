import { create } from 'zustand';

const IntervalCount = create((set) => ({
    interval: '',
    setInterval: (newInterval) => set( (state) => {
        return {
            ...state,
            interval: newInterval
                   }
    })
}));

export default IntervalCount;