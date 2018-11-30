// @flow
import React, {Component} from 'react';
import 'babel-polyfill';

import {getRepositories} from './getRepositories';

import type {Repo} from './types/Repo';
import RepoList from './RepoList';
import {getOrganization} from './getOrganization';

const sidebarStyle = {
  flexGrow: 1,
  flexBasis: 0,
};

const bodyStyle = {
  flexGrow: 4,
  flexBasis: 0,
};

type Props = {};
type State = {
  repoList: Array<Repo>,
  searchText: string,
  organization: string,
  isFetching: boolean,
  orgData: Object,
  hasError: boolean,
};
class App extends Component<Props, State> {
  state = {
    repoList: [],
    searchText: '',
    organization: '',
    isFetching: false,
    orgData: {},
    hasError: false,
  };
  render() {
    let {
      repoList,
      searchText,
      organization,
      isFetching,
      orgData,
      hasError,
    } = this.state;
    let content = isFetching ? (
      <img src="loading.gif" />
    ) : (
      <RepoList repositories={repoList} />
    );
    let orgDetail = isFetching ? (
      <div>
        <img src="loading.gif" />
      </div>
    ) : organization != '' ? (
      <div>
        <h2>{organization}</h2>
        <label>Email :</label>
        <span>{orgData.email}</span>
        <br />
        <label>Public Repository Count : </label>
        <span>{orgData.publicRepos}</span>
      </div>
    ) : hasError ? (
      <div>
        <span style={{color: '#F00'}}>NOT FOUND</span>
      </div>
    ) : (
      ''
    );
    return (
      <div className="container">
        <div style={sidebarStyle}>
          <h2>Search Repository</h2>
          <input
            type="text"
            value={searchText}
            onChange={this._onSearchChange}
          />
          <button onClick={this._fetchRepositories}>Search</button>
          {orgDetail}
        </div>
        <div style={bodyStyle}>{content}</div>
      </div>
    );
  }
  _onSearchChange = (event) => {
    this.setState({searchText: event.target.value});
  };
  _fetchRepositories = () => {
    let {searchText} = this.state;
    let url = `https://api.github.com/orgs/${searchText}/repos`;
    let orgResp = getOrganization(searchText);
    let response = getRepositories(url);
    this.setState({isFetching: true});
    Promise.all([orgResp, response])
      .then(([orgData, repositories]) => {
        if (orgData != null) {
          this.setState({
            orgData: {
              email: orgData.email,
              publicRepos: orgData.public_repos,
            },
            organization: orgData.name,
          });
          let tempList = [];
          if (repositories != null) {
            for (let repo of repositories) {
              tempList.push({
                id: repo.id,
                link: repo.html_url,
                name: repo.name,
                subCount: repo.watchers_count,
              });
            }
            this.setState({
              repoList: [...tempList],
              searchText: '',
              isFetching: false,
              hasError: false,
            });
          }
        }
      })
      .catch((error) => {
        this.setState({
          organization: '',
          repoList: [],
          searchText: '',
          isFetching: false,
          orgData: {},
          hasError: true,
        });
      });
  };
}

export default App;
