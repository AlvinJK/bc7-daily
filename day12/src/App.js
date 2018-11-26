// @flow
import React, {Component} from 'react';

import RepoList from './RepoList';

import type {Repos} from './types/Repos';
type Props = {};
type State = {
  repositoryList: Array<Repos>,
  errorMessage: string,
};

export default class App extends Component<Props, State> {
  state = {
    repositoryList: [],
    errorMessage: '',
  };
  constructor() {
    super();
    console.log('App Started');
    this._getRepoList();
    console.log('Finish Constructing');
  }
  _getRepoList = () => {
    console.log('Initiate fetch of repositories');
    let url = 'https://api.github.com/orgs/kodefox/repos';
    let response = fetch(url);

    let errorMessage = '';
    let data = response.then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response.statusText);
        errorMessage = response.statusText;
      }
    });
    data.then((data: void | Object) => {
      let tempList: Array<Repos> = [];
      if (errorMessage == '') {
        if (data) {
          for (let repo: Object of data) {
            tempList.push({
              id: repo.id,
              url: repo.html_url,
              reposName: repo.name,
              numOfSub: repo.watchers_count,
            });
          }
          this.setState({
            repositoryList: [...tempList],
          });
        }
      } else {
        this.setState({errorMessage});
      }
    });
    console.log('Fetching queued');
  };
  render() {
    let errorBlock =
      this.state.errorMessage == '' ? (
        ''
      ) : (
        <span style={{color: 'red'}}>{this.state.errorMessage}</span>
      );
    return (
      <div>
        <h1>Kodefox Repository List</h1>
        {errorBlock}
        <RepoList repositoryList={this.state.repositoryList} />
      </div>
    );
  }
}
