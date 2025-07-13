import { create } from 'zustand';

const DayCount = create((set) => ({
    day: 30,
    setDay: (newDay) => set( (state) => {
        return {
            ...state,
            day: newDay
                   }
    })
}));

export default DayCount;