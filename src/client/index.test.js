import axios from 'axios';
import { getProductsList, getItemByID, getItemDescription } from './';

jest.mock('axios');

describe('Client tests', () => {
  describe('getProductsList', () => {
    it('should get data from the API successfully', async () => {
      const data = {
        data: [
          {
            id: 'MLA1116892810',
            thumbnail: 'thumbnail',
            price: 1500,
            title: 'Playstation 5',
            address: 'Buenos Aires',
          },
        ],
      };

      axios.get.mockImplementationOnce(() => Promise.resolve(data));
      await expect(getProductsList('Playstation')).resolves.toEqual(data);
    });

    it('should throw error when request is unsucessful', async () => {
      const errorMessage = 'Error';

      axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage))
      );

      await expect(getProductsList('Playstation')).rejects.toThrow(
        errorMessage
      );
    });
  });

  describe('getItemByID', () => {
    it('should get one item from the API successfully', async () => {
      const data = {
        data: [
          {
            id: 'MLA1116892810',
            title: 'Playstation 5',
            price: 1500,
            sold_quantity: 10,
            condition: 'new',
            thumbnail: 'thumbnail',
            pictures: [
              {
                url: 'url',
              },
            ],
          },
        ],
      };

      axios.get.mockImplementationOnce(() => Promise.resolve(data));
      await expect(getItemByID('MLA1116892810')).resolves.toEqual(data);
    });

    it('should throw error when request is unsucessful', async () => {
      const errorMessage = 'Error';

      axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage))
      );

      await expect(getItemByID('Playstation')).rejects.toThrow(errorMessage);
    });
  });

  describe('getItemDescription', () => {
    it('should get item description from the API successfully', async () => {
      const data = {
        data: {
          plain_text: 'Description goes here',
        },
      };

      axios.get.mockImplementationOnce(() => Promise.resolve(data));
      await expect(getItemDescription('MLA1116892810')).resolves.toEqual(data);
    });

    it('should throw error when request is unsucessful', async () => {
      const errorMessage = 'Error';

      axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage))
      );

      await expect(getItemDescription('MLA1116892810')).rejects.toThrow(
        errorMessage
      );
    });
  });
});
