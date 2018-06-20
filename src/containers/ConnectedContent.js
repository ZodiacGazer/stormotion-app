import { connect } from 'react-redux';
import Content from '../components/Content';

const mapStateToProps = (state, props) => {
	return { cards: state.cards}
};

const ConnectedContent = connect(mapStateToProps)(Content);

export default ConnectedContent;