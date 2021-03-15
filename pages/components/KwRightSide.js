import React, { Component } from 'react';
import PopularKws from "./KeywordBlocks/PopularKws";

const KwRightSide = (props) => {
		return (            
			<div id="rightside">
				<PopularKws {...props} />
			</div>
		)
}

export default KwRightSide

