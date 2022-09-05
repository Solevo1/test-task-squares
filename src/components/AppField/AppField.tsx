import {
  Dispatch, FC, SetStateAction, useMemo,
} from 'react';

import './AppField.css';

type AppFieldProps = {
  appFieldSize: number;
  hoveredCells: number[];
  setHoveredCells: Dispatch<SetStateAction<number[]>>;
}

const AppField: FC<AppFieldProps> = (
  { appFieldSize, setHoveredCells, hoveredCells },
) => {
  const squareSide = `${500 / appFieldSize}px`;
  const squareArray = useMemo(
    () => [...Array(appFieldSize ** 2)],
    [appFieldSize],
  );

  return (
    <div className='AppField' style={{ gridTemplateColumns: `repeat(${appFieldSize}, ${squareSide}` }}>
      {
        squareArray.map((value, index) => (
          <div
            key={index}
            onMouseEnter={() => {
              setHoveredCells((prev) => (prev.includes(index)
                ? prev.filter((cell) => cell !== index) : [...prev, index]));
            }}
            style={
              {
                height: squareSide,
                backgroundColor: hoveredCells.includes(index)
                  ? 'blue' : 'white',
              }
            }
            className='AppField-cell'
          />
        ))
      }
    </div>
  );
};

export default AppField;
