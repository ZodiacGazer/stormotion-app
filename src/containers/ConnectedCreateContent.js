import { connect } from 'react-redux';
import CreateContent from '../components/CreateContent';
import { createCard, editCard, removePicture } from '../actions';

const mapStateToProps = (state, props) => {
	return {
		cards: state.cards
	}
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		createCard: (title, text, url) => dispatch(createCard(title, text, url)),
		editCard: (id, title, text, url) => dispatch(editCard(id, title, text, url)),
		removePicture: (picId, cardId) => dispatch(removePicture(id))
	}
};

const ConnectedCreateContent = connect(mapStateToProps, mapDispatchToProps)(CreateContent);
export default ConnectedCreateContent;