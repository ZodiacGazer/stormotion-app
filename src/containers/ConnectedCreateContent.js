import { connect } from 'react-redux';
import CreateContent from '../components/CreateContent';
import { createCard, editCard } from '../actions';

const mapStateToProps = (state, props) => {
	return {
		cards: state.cards
	}
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		createCard: (title, text, url) => dispatch(createCard(title, text, url)),
		editCard: (id, title, text, url) => dispatch(editCard(id, title, text, url))
	}
};

const ConnectedCreateContent = connect(mapStateToProps, mapDispatchToProps)(CreateContent);
export default ConnectedCreateContent;