import React, { Component } from 'react';
// import HanziWriter from 'hanzi-writer';
import HanziWriter from './hanzi-writer/src/HanziWriter';

        // return {"character":"人","strokes":["M 475 485 Q 547 653 563 683 Q 573 695 565 708 Q 558 721 519 742 Q 491 757 480 754 Q 462 750 465 730 Q 484 537 292 308 Q 280 296 269 284 Q 212 217 68 102 Q 58 92 66 89 Q 76 86 90 92 Q 190 138 274 210 Q 380 294 462 456 L 475 485 Z","M 462 456 Q 480 423 575 292 Q 666 171 733 101 Q 764 67 793 69 Q 881 75 958 79 Q 991 80 992 89 Q 993 98 956 112 Q 772 178 740 205 Q 617 304 490 466 Q 481 476 475 485 L 462 456 Z"],"medians":[[[483,736],[508,702],[511,678],[473,552],[408,416],[328,303],[271,244],[144,139],[72,95]],[[474,477],[477,459],[490,439],[571,333],[691,200],[753,145],[798,119],[986,90]]]};

import { median_util } from './makemeahanzi/median_util';
const result = median_util.findStrokeMedian(
  `M 518 382 Q 572 385 623 389 Q 758 399 900 383 Q 928 379 935 390 Q 944 405 930 419 Q 896 452 845 475 Q 829 482 798 473 Q 723 460 480 434 Q 180 409 137 408 Q 130 408 124 408 Q 108 408 106 395 Q 105 380 127 363 Q 146 348 183 334 Q 195 330 216 338 Q 232 344 306 354 Q 400 373 518 382 Z`
);

// const result = median_util.findStrokeMedian(
//   "M11 54.25c3.19 0.62 6.25 0.75 9.73 0.5c20.64-1.5 50.39-5.12 68.58-5.24c3.6-0.02 5.77 0.24 7.57 0.49 Z"
// );

console.log(result);

class App extends Component {
  componentDidMount() {
    var writer = new HanziWriter(this.wrapper, '一', {
      width: 400,
      height: 400,
      // strokeColor: '#fff',
      // outlineColor: '#333',
      // outlineWidth: 6,
      charDataLoader: function(char) {
        // if (char !== '人') throw "invalid character, only have data for 人";

        // return {
        //   "character": '-',
        //   "strokes": ["M 50 50 L 200 200"],
        //   "medians":[
        //     [
        //       [50,50],
        //       [200,200]
        //     ]
        //   ]
        // }

        return {
          "character":"一",
          "strokes":[
            "M 518 382 Q 572 385 623 389 Q 758 399 900 383 Q 928 379 935 390 Q 944 405 930 419 Q 896 452 845 475 Q 829 482 798 473 Q 723 460 480 434 Q 180 409 137 408 Q 130 408 124 408 Q 108 408 106 395 Q 105 380 127 363 Q 146 348 183 334 Q 195 330 216 338 Q 232 344 306 354 Q 400 373 518 382 Z"
          ],
          "medians":[
            [
              [121,393],
              [193,372],
              [417,402],
              [827,434],
              [920,401]
            ]
          ]
        };

        // return {
        //   "character":"人",
        //   "strokes":[
        //   "M 475 485 Q 547 653 563 683 Q 573 695 565 708 Q 558 721 519 742 Q 491 757 480 754 Q 462 750 465 730 Q 484 537 292 308 Q 280 296 269 284 Q 212 217 68 102 Q 58 92 66 89 Q 76 86 90 92 Q 190 138 274 210 Q 380 294 462 456 L 475 485 Z","M 462 456 Q 480 423 575 292 Q 666 171 733 101 Q 764 67 793 69 Q 881 75 958 79 Q 991 80 992 89 Q 993 98 956 112 Q 772 178 740 205 Q 617 304 490 466 Q 481 476 475 485 L 462 456 Z"],
        //   "medians":[[[483,736],[508,702],[511,678],[473,552],[408,416],[328,303],[271,244],[144,139],[72,95]],[[474,477],[477,459],[490,439],[571,333],[691,200],[753,145],[798,119],[986,90]]]
        // };
      }
    });

    // animate the strokes in the character
    writer.animateCharacter({
      onComplete: function() { console.log('finished animating!'); }
    });

    // writer.hideOutline();

    // writer.quiz({
    //   onCorrectStroke: function(status) { console.log('got a stroke correct! :)', status); },
    //   onMistake: function(status) { console.log('Oh no, you made a mistake drawing the stroke :(', status); },
    //   onComplete: function(status) { console.log('Yay you finished the whole character! :D', status); }
    // });
  }
  render() {
    return (
      <div style={{height: 400, width: 400}} ref={el => this.wrapper = el}>

      </div>
    );
  }
}

export default App;
