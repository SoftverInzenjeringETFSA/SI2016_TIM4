import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import { makeCancelable } from '../../globals';

var rb = ReactBootstrap;
var Grid = rb.Grid;
var Row = rb.Row;
var Col = rb.Col;
var Panel = rb.Panel;
var ListGroup = rb.ListGroup;
var ListGroupItem = rb.ListGroupItem;


export class PollQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opis: "",
      pitanja: [],
      id: props.match.params.id
    };

    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    this.req = makeCancelable(fetch('https://immense-chamber-20752.herokuapp.com/anketa/details/' + this.state.id));
    this.req.promise.then(response => response.json())
      .then(result => this.setState({ opis: result.opis, pitanja: result.pitanjaVM}))
      .catch(error => this.setState({ errorMessage: error + "" }));
  }


  render() {

      if(this.state.pitanja.length === 0 || this.state.opis === "") {
        return(
            <div></div>
        );
      }
      else {

        var n = this.state.pitanja.length;

        var polls = this.state.pitanja.map((p) => (
          <ListGroupItem>
            {p.text}
          </ListGroupItem>
        ));

        var ActionSection = (
          <div>
            <Panel header={this.state.opis}>
              <ListGroup>
                {polls}
              </ListGroup>
            </Panel>
          </div>
        );

        return(
          <Grid>
            <Row className="show-grid">
              <Col md={8} mdOffset={2}>
                {ActionSection}
              </Col>
            </Row>
          </Grid>
        );
      }
    }
}
