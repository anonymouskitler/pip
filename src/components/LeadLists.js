import React from 'react';
import { connect } from 'react-redux';
import { fetchLeads } from '../wit/actionCreators/actionCreators';
import { List } from 'semantic-ui-react';

class LeadLists extends React.Component {
  componentDidMount() {
    this.props._fetchLeads();
  }
  render() {
    return (
      <div>
        <h3> List of leads here</h3>
        <List>
          {this.props.leads.map((lead, i) => (
            <List.Item key={i}>
              <List.Content>
                <List.Header as="a">{lead.name}</List.Header>
                <List.Description as="a">{lead.phone}</List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    _fetchLeads: () => dispatch(fetchLeads())
  };
};

const mapStateToProps = state => {
  return {
    leads: state.data.leads
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeadLists);
