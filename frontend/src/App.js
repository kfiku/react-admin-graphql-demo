import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import buildGraphQLProvider from 'ra-data-graphql-simple';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { UserList, UserEdit, UserCreate } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

class App extends Component {
  constructor() {
    super();
    this.state = { dataProvider: null };
  }

  componentDidMount() {
    buildGraphQLProvider({ clientOptions: { uri: 'http://localhost:3001' } })
      .then(dataProvider => this.setState({ dataProvider }));
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
      return <div>Loading</div>;
    }

    return (
      <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="Post" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="User" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
      </Admin >
    )
  }
}

export default App;
