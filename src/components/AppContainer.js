import React from 'react'
import {connect} from 'react-redux'
import {testNow, submitLeadForm} from '../wit/actionCreators/actionCreators.js'
import LeadLists from './LeadLists'
import LeadForm from './LeadForm'
import { Grid, Container } from 'semantic-ui-react'

class AppContainer extends React.Component {
	componentDidMount() {
		this.props.onMount('Bonjour')
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}
  handleFormSubmit() {
    this.props.submitLeadForm()
  }

	render() {
		return(
			<div>
			  {/*<LeadForm style={styles.form}	/>*/}
        <Container>
  			  <Grid container padded>
  			  	<Grid.Row>
  			  		<Grid.Column width={5}>
  					  	<LeadLists />
  			  		</Grid.Column>
    		  		<Grid.Column width={11}>
    				  	<LeadForm onSubmit={this.handleFormSubmit}/>
    		  		</Grid.Column>
  			  	</Grid.Row>
  			  </Grid>
        </Container>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		state: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onMount: (data) => (dispatch(testNow(data))),
    submitLeadForm: ()=>(dispatch(submitLeadForm()))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
