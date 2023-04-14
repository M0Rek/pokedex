import {
  CardContent,
  CardMedia,
  Typography,
  Card,
  CardHeader,
} from "@mui/material";

export default function PokeCard(props) {
  return (
    <Card>
      <CardHeader title="Pokemon name" subtitle="type" />
      <CardMedia image="Pokemon image" alt="Image of Pokemon name" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This is an explanation of pokemon stats
          Id:
          
          HP:
          Attack:
          Defense:
          Special attack:
          Special defense:
          Speed:
          
          Base Experience:
          Height:
          Weight:

          Abilities:
          Moves:

        </Typography>
      </CardContent>
    </Card>
  );
}
