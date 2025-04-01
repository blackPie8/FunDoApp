import React from 'react';
import NoteState from './src/context/NoteState.tsx';
import ThemeState from './src/context/ThemeState.tsx';
import Navigator from './src/navigation/Navigator.tsx';
import AuthState from './src/context/AuthState.tsx';

const App = () => {
  return (
    <ThemeState>
      <AuthState>
        <NoteState>
          <Navigator />
        </NoteState>
      </AuthState>
    </ThemeState>
  );
};

export default App;
