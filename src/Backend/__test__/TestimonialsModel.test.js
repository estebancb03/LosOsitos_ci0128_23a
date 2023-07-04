import { getAllReviews, updateReviewState, getRandomReviews, getCheckReview, updateReview, insertReview } from "../src/models/TestimonialsModel";

describe('TestimonialsModel', () => {
    test('getAllReviews all the reviews in existence', async () => {
      const mockReq = {};
      const mockRes = {
        status: jest.fn(),
        json: jest.fn()
      };
  
      await getAllReviews(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
    });

    
    test('updateReviewState update the state of one specific testimony', async () => {
      const mockReq = {body: {ID: '11818', 
          State: 1}};
      const mockRes = {
        status: jest.fn(),
        send: jest.fn(),
      };
  
      const expectedResult = "The update to the review was successful";
  
      await updateReviewState(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.send).toHaveBeenCalledWith(expectedResult);
    });

    
    test('getRandomReviews returns 3 random approved reviews', async () => {
      const mockReq = {};
      const mockRes = {
        status: jest.fn(),
        json: jest.fn(),
      };

      await getRandomReviews(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
    });

    
    test('getCheckReview check if an user has a review, if user has a review return true', async () => {
        const mockReq = {params: {ID: '11818'}};
        const mockRes = {
          status: jest.fn(),
          send: jest.fn(),
        };
    
        const expectedResult = true;
    
        await getCheckReview(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.send).toHaveBeenCalledWith(expectedResult);
      });    
      
      test('getCheckReview check if an user has a review, if user doesnt have a review return false', async () => {
        const mockReq = {params: {ID: '987789987789'}};
        const mockRes = {
          status: jest.fn(),
          send: jest.fn(),
        };
    
        const expectedResult = false;
    
        await getCheckReview(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.send).toHaveBeenCalledWith(expectedResult);
      });

    
      test('updateReview update the description of one specific testimony', async () => {
        const mockReq = {body: {ID: '11818', 
            Description: "test123"}};
        const mockRes = {
          status: jest.fn(),
          send: jest.fn(),
        };
  
      const expectedResult = "The update to the review was successful";
  
      await updateReview(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.send).toHaveBeenCalledWith(expectedResult);
    });
    
    test('insertReview insert a testimony', async () => {
      const mockReq = {body: {ID: '871530241', 
          Description: "test123"}};
      const mockRes = {
        status: jest.fn(),
        send: jest.fn(),
      };
    
      await insertReview(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(500);
    });
    
    test('insertReview insert a testimony, fails if the user already has a testimony', async () => {
      const mockReq = {body: {ID: '11818', 
          Description: "test123"}};
      const mockRes = {
        status: jest.fn(),
        send: jest.fn(),
      };
  
  
      await insertReview(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(500);
    });
});
