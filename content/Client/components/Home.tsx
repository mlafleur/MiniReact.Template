import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Jumbotron } from 'reactstrap';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
  public render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>Welcome to the Mini React remplate</p>
        </Jumbotron>
      </Container>
    );
  }
}
