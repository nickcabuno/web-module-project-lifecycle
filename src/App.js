import React from 'react';
import styled from 'styled-components';
import getHub from './getHub'

const StyledHub = styled.div`
box-shadow: 0px 10px 50px 20px rgba(0, 0, 0, 0.2);
max-width: 300px;
margin: auto;
display: flex;
align-items: center;
flex-flow: column nowrap;
margin-top: 3%;
color: grey;
background-color: tan;

.avi{
    width: 60%;
    margin-top: 3%;
}
`

class App extends React.Component {
    state = {
        info: [],
    }
    
    componentDidMount() {
      getHub()
          .then(data => {
              this.setState({
                  info: data
              });
          })
          .catch(err=>{
              console.log(err);
          });
        }
    

  render() {
      return(
      <StyledHub>
        <img className="avi" src={this.state.info.avatar_url}></img>  
        <h2>{this.state.info.name}</h2>
        <p>{this.state.info.login}</p>
        <p>Followers: {this.state.info.followers}</p>
        <p>Following: {this.state.info.following}</p>
        <p>Location: {this.state.info.location}</p>
        <p>{this.state.info.bio}</p>
      </StyledHub>
      );
  }
}

export default App;
