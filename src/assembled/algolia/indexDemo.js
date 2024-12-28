import { algoliasearch } from 'algoliasearch';

const client = algoliasearch('XL3WBDNNU6', 'c65ccb1c5a3e3a6df1870e4ee4f1cd2d');

// Fetch and index objects in Algolia
const processRecords = async () => {
  const datasetRequest = await fetch('https://dashboard.algolia.com/sample_datasets/movie.json');
  const movies = await datasetRequest.json();
  return await client.saveObjects({ indexName: 'movies_index', objects: movies });
};

processRecords()
  .then(() => console.log('Successfully indexed objects!'))
  .catch((err) => console.error(err));