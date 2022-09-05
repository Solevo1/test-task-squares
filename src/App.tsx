import { useEffect, useState } from 'react';

import AppField from './components/AppField/AppField';
import HoveredSquares from './components/HoveredSquares/HoveredSquares';
import SelectMode from './components/SelectMode/SelectMode';

import './App.css';

import { AppPreset } from './utils/types';
import { api } from './utils/api';
import AppError from './components/AppError/AppError';

const App = () => {
  const [appPresets, setAppPresets] = useState<Array<AppPreset>>([]);
  const [errorMessage, setErrorMessage] = useState<string>();
  useEffect(() => {
    (async () => {
      try {
        const fetchResult = await api.fetchAppPresets();
        setAppPresets(fetchResult);
      } catch (error) {
        let message;
        if (error instanceof Error) message = `${error.name}: ${error.message}`;
        else message = String(error);
        setErrorMessage(message);
      }
    })();
  }, []);

  const [hoveredCells, setHoveredCells] = useState<Array<number>>([]);

  const [appFieldSize, setAppFieldSize] = useState<number>();

  return (
    <div className='App'>
      {errorMessage
        ? (
          <AppError message={errorMessage} />
        )
        : (
          <SelectMode
            appPresets={appPresets}
            setAppField={setAppFieldSize}
            setHoveredCells={setHoveredCells}
          />
        )}
      {appFieldSize
        && (
          <main className='App-main'>
            <AppField
              appFieldSize={appFieldSize}
              hoveredCells={hoveredCells}
              setHoveredCells={setHoveredCells}
            />
            <HoveredSquares
              appFieldSize={appFieldSize}
              hoveredCells={hoveredCells}
            />
          </main>
        )}
    </div>
  );
};

export default App;
