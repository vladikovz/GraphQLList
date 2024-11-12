import './App.css';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from './query/countries.ts';

function App() {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading && !data) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {data.countries.map((item) => (
        <div>{item.name}</div>
      ))}
    </>
  );
}

export default App;
