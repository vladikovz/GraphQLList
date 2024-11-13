import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

type DetailedCard = {
  name: string;
  emoji: string;
  native: string;
  currency: string;
};
export default function DetailedCard(props: DetailedCard) {
  const { name, emoji, native, currency } = props;

  return (
    <Card
      sx={{ maxWidth: 345, margin: '1rem', padding: '1rem', borderRadius: '12px', boxShadow: 3 }}
    >
      <CardHeader title={name} subheader={emoji} />
      <Divider />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          Native: <strong>{native}</strong>
        </Typography>
        <Typography variant="body1" color="text.secondary" marginTop={0.5}>
          Currency: <strong>{currency}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
}
