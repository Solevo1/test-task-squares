import { FC } from 'react';

import './HoveredSquares.css';

type HoveredSquaresProps = {
  appFieldSize: number;
  hoveredCells: number[];
}

const HoveredSquares: FC<HoveredSquaresProps> = (
  { appFieldSize, hoveredCells },
) => (
  <div className='HoveredSquares'>
    <p>Hovered squares</p>
    <ul className='HoveredSquares-list'>
      {
        hoveredCells.map((cellId) => (
          <li key={cellId} className='HoveredSquares-item'>
            {`row ${Math.floor(cellId / appFieldSize) + 1} col ${(cellId % appFieldSize) + 1}`}
          </li>
        ))
      }
    </ul>
  </div>
);

export default HoveredSquares;
