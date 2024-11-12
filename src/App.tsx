import './App.css';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES, GetCountriesData } from './query/countries.ts';
import DetailedCard from './components/DetailedCard.tsx';
import { CircularProgress } from '@mui/material';

function App() {
  const { data, loading, error } = useQuery<GetCountriesData>(GET_COUNTRIES);

  if (loading && !data) return <CircularProgress />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>Countries List:</h1>
      {data?.countries.map((item) => (
        <DetailedCard
          name={item.name}
          emoji={item.emoji}
          native={item.native}
          currency={item.currency}
        />
      ))}
    </>
  );
}

export default App;
