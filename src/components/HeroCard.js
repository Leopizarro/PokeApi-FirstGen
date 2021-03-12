import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './HeroCard.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function HeroCard({Pkmn}) {
  const classes = useStyles();

  return (
    <Card className="Card-container">
      <CardActionArea className="Card">
        <CardMedia
          className="media"
          image={Pkmn.sprites.front_default}
          title="Pokemon Sprite"
        />
        <CardContent className="Card">
          <Typography gutterBottom variant="h5" component="h2">
            <strong className="whitetext">N°{Pkmn.id}.</strong>
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            <strong className="capitalize whitetext">{Pkmn.name}</strong>
          </Typography>
          <Typography className="types" gutterBottom variant="h6" component="h6">
            {Pkmn.types.map((type) =>(
                <h6 className="types capitalize whitetext">{type.type.name}</h6>
            ))}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <Table>
                {Pkmn.stats.map((pkmnstat) => (
                    <TableRow className="cell">
                        <TableCell className="capitalize" variant="head"><strong>{pkmnstat.stat.name}</strong></TableCell>
                        <TableCell ><strong>{pkmnstat.base_stat}</strong></TableCell>
                    </TableRow>

                ))}
            </Table>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}