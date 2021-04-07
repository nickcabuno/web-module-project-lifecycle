import React from 'react';
import getHub from './getHub'


class App extends React.Component {
    state = {
        info: []
    }
    
    GithubInfo() {
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
      <div>
          <h1>GitHub Info</h1>
          <div>{this.state.info.avatar_url}</div>
          <h2>{this.state.info.name}</h2>
          <p>{this.state.info.login}</p>
          <p>{this.state.info.followers}</p>
          <p>{this.state.info.following}</p>
          <p>{this.state.info.location}</p>
          <p>{this.state.info.bio}</p>
      </div>
      );
  }
}

export default App;
