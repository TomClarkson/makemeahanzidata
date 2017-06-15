import { median_util } from './makemeahanzi/median_util';

// const character = {
//   "character":"一",
//   "strokes":[
//     "M 518 382 Q 572 385 623 389 Q 758 399 900 383 Q 928 379 935 390 Q 944 405 930 419 Q 896 452 845 475 Q 829 482 798 473 Q 723 460 480 434 Q 180 409 137 408 Q 130 408 124 408 Q 108 408 106 395 Q 105 380 127 363 Q 146 348 183 334 Q 195 330 216 338 Q 232 344 306 354 Q 400 373 518 382 Z"
//   ],
//   "medians":[
//     [
//       [121,393],
//       [193,372],
//       [417,402],
//       [827,434],
//       [920,401]
//     ]
//   ]
// }


// const result = median_util.findStrokeMedian(character.strokes[0]);

// console.table(result);
// console.table(character.medians);

const result = median_util.findStrokeMedian(
  "M11 54.25c3.19 0.62 6.25 0.75 9.73 0.5c20.64-1.5 50.39-5.12 68.58-5.24c3.6-0.02 5.77 0.24 7.57 0.49 Z"
);
console.log(result);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
