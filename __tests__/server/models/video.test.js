import mongoose from 'mongoose'
import Video from '../../../server/models/video'

test('can create an empty video', () => {
  const video = new Video()
  expect(video.toJSON()).toEqual({
    _id: expect.any(mongoose.Types.ObjectId),
    viewCount: 0
  })
})

/* Our goal here is to unit test an instance method of our Video class.
 * We want to make sure that when a video is watched, the viewCount of that video is incremented.
 *
 * To pass the prompt: 
 * - Write these tests, implement the function incrementally and pass the tests one by one.
 * - Implement the function `watch` in `server/models/video.js`
 *
 * Test for these cases:
 * 1. Expect watch to be a function. DONE
 * 2. Expect viewCount to be incremented by 1 after invoking watch. DONE
 * 3. Expect the function to return an instance of itself.  DONE
 */

 test('typeof watch should be function', () => {
 	const video = new Video();
  expect(typeof video.watch).toEqual('function');
});

 test('expect viewCount to be incremented by 1 after invoking watch', () => {
 	const video = new Video();
  expect(video.viewCount).toEqual(0);
  video.watch();
  expect(video.viewCount).toEqual(1);
});

 test('expect the function to return an instance of itself', () => {
 	const video = new Video();
  expect(video.watch()).toEqual(video);
});