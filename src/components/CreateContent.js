import React from 'react';

import { Link } from 'react-router-dom';


// Components
import CreatePreviewCard from './CreatePreviewCard';
import PreviewCard from './PreviewCard';

import Button from './Button';

// Assets
import './CreateContent.css';
import placeHolder from '../assets/picture.png';
import addIcon from '../assets/shape-copy-line-line-copy.png';
import phoneIcon from '../assets/group-2.png';



class CreateContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: this.props.cards,
			title: '',
			text: '',
			url: []
		}
		this.handleInputs = this.handleInputs.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
		this.handleDeletePicture = this.handleDeletePicture.bind(this);
		this.id = props.id || null;
	}
	componentDidMount() {
		if (this.id != null) {
			const {title, text, url} = this.state.cards[this.id];
			this.setState({
				title,
				text,
				url
			})
		}
	}

	handleInputs(e) {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		this.setState({
			[name]: value
		})
	};
	handleClick() {
		const {title, text, url} = this.state;
		if (this.id === null) {
			this.props.createCard(title, text, url);	
		} else {
			this.props.editCard(this.id, title, text, url)
		}
		
	}
	handleUpload(e) {
		let files = e.target.files;
		for (let i = 0, f; f = files[i]; i++) {
			if (!f.type.match('image.*')) {
				alert('Ooops, you choosed wrong file. Only images allowed!')
				continue
			}
		
            const fr = new FileReader();
            fr.onloadend = () => {
                this.setState({
                	url: [...this.state.url, fr.result]
                })
            }
          	fr.readAsDataURL(f)
        }
	}
	handleDeletePicture(pos) {
		let newUrls = this.state.url.filter((e, i) => i != pos);
		this.setState({
			url: newUrls
		})
	};
	render() {
		const buttonActive = this.state.title ? '' : 'disabled';
		return (
			<main className='content'>
				<div className='create__wrapper'>
					<div className='create__preview'>
						<div className='preview-interacitve' style={{backgroundImage: `url(${phoneIcon}`}}>
							<div className='interactive__card'>
								<img className='interactive__icon' src={this.state.url[0] || placeHolder} />
								<div className='interactive__info'>
									<p className='interactive__title'>{this.state.title}</p>
									<p className='interactive__text'>{this.state.text}</p>
								</div>
							</div>
						</div>
					</div>
					<div className='create__paper'>
						<Link to='/'>
							<button onClick={this.handleClick} disabled={!this.state.title} className={`create__button ${buttonActive}`}>Сохранить</button>
						</Link>
						<h4 className='paper__title'>Заголовок</h4>
						<input className='title__input' value={this.state.title} type='text' name='title' maxlenght="20" onChange={this.handleInputs} />
						<h4 className='paper__desc'>Описание</h4>
						<textarea  value={this.state.text}  className='desc__input' rows="5" name='text' onChange={this.handleInputs}></textarea>
						<h4 className='paper__pics'>Фотографии</h4>
						<div className='paper__grid'>
							{this.state.url.length ? this.state.url.map((e, i) => <PreviewCard url={e} key={i.toString()} id={i} deletePicture={this.handleDeletePicture} />) : false}
							<div className='card__pic preview-pic placeholder' style={{backgroundImage: `url(${placeHolder})`}}>
								<label className='upload-pic' htmlFor='upload-pic'>link
									<input className='paper__image' id='upload-pic' name='upload-pic' type='file' accept='image/*' onChange={this.handleUpload} multiple />
								</label>
								<img className='add-icon' src={addIcon} />
							</div>
						</div>
						{/*<Link to='/'><button onClick={this.handleClick}>Save</button></Link>*/}
					</div>
				</div>
			</main>
		)
	}
}

export default CreateContent;