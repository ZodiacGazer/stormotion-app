import React from 'react';

// Assets
import pumpkin from '../assets/pumpkin.jpg';
import placeHolder from '../assets/placeholder.png';
import './CreatePreviewCard.css';

const CreatePreviewCard = () => {

	const handleUpload = (e) => {
		let files = e.target.files;
		if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onloadend = function () {
                localStorage['file'] = fr.result;
                console.log(fr.result);
            }
            if (files[0]) {
            	console.log(fr.readAsDataURL(files[0]))
            }
        }
	}
	return (
		<div className='card__pic preview-pic' style={{backgroundImage: `url(${placeHolder})`}}>
			<label className='upload-pic' htmlFor='upload-pic'>link
				<input className='paper__image' id='upload-pic' name='upload-pic' type='file' accept='image/*' onChange={handleUpload} />
			</label>
		</div>
	)
};

export default CreatePreviewCard;