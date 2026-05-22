import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';

export default function ProductCard() {
  return (
    <Card
      sx={{
        width: 320,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardHeader
        title="Wireless Headphones"
        subheader="$99.99"
      />

      <CardContent>
        <Typography variant="body2">
          Premium wireless headphones with noise
          cancellation and long battery life.
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="outlined">
          View
        </Button>

        <Button variant="contained">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}