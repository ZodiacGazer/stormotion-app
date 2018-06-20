import { connect } from 'react-redux';
import CreateContent from '../components/CreateContent';
import { createCard } from '../actions';

const mapDispatchToProps = (dispatch, props) => {
	return {
		createCard: (title, text, url) => dispatch(createCard(title, text, url))
	}
};

const ConnectedCreateContent = connect(null, mapDispatchToProps)(CreateContent);
export default ConnectedCreateContent;