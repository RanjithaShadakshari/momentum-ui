import { JSDOM } from 'jsdom';
import MomentumCharts from '../../index.js';

describe('#Arc Tests', function() {
  let board;
  const { document } = (new JSDOM('')).window;

  beforeEach(function() {
    board = new MomentumCharts.Board(document.body);
  });

  it('Register Arc', function() {
    expect(board.arc).toBeTruthy();
  });

});

