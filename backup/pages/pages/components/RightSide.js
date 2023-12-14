import React, { Component } from 'react';
import StoreCard from './Store/StoreCard'

const RightSide = (props) => {
		return (            
			<div id="rightside">
				<StoreCard {...props} />
			</div>
		)
}

export default RightSide

