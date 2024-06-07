// src/redux/songSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SongState {
  title: string;
  artist: string;
  imageUrl: string;
  src: string;
}

const initialState: SongState = {
  title: 'Sample Song',
  artist: 'Sample Artist',
  imageUrl: 'https://via.placeholder.com/150',
  src: 'http://localhost:5173/audio/Cancion.mp3',
};

const songSlice = createSlice({
  name: 'song',
  initialState, 
  reducers: {
    setSong(state, action: PayloadAction<SongState>) {
        state.title = action.payload.title;
        state.artist = action.payload.artist;
        state.imageUrl = action.payload.imageUrl;
        state.src = action.payload.src;
    },
  },
});

export const { setSong } = songSlice.actions;

export const songReducer = songSlice.reducer;
