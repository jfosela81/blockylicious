import metadata from '../block.json';
import { __ } from '@wordpress/i18n';
import { ToggleControl, HorizontalRule, RangeControl } from '@wordpress/components';
import { ColorPalette } from '@wordpress/block-editor';

export const TopCurveSettings = ( props ) => {
	return (
		<>
			<HorizontalRule />
			<RangeControl 
				label={__( 'Width', metadata.textdomain )} 
				min={100} 
				max={300}
				value={props.attributes.topWidth || 100}
				onChange={(newValue) => {
					props.setAttributes({
						topWidth : parseInt( newValue )
					})
				}}
			/>
			<RangeControl 
				label={__( 'Height', metadata.textdomain )} 
				min={0} 
				max={200}
				value={props.attributes.topHeight}
				onChange={(newValue) => {
					props.setAttributes({
						topHeight : parseInt( newValue )
					})
				}}
			/>

			<HorizontalRule />
			<div style={{display: 'flex'}}>
				<ToggleControl onChange={(isChecked) => {
						props.setAttributes({
							topFlipX : isChecked,
						});
					}} 
					checked={props.attributes.topFlipX} 
				/>
				<span>{__( 'Flip horizontally', metadata.textdomain )}</span>
			</div>
			<div style={{display: 'flex'}}>
				<ToggleControl onChange={(isChecked) => {
						props.setAttributes({
							topFlipY : isChecked,
						});
					}} 
					checked={props.attributes.topFlipY} 
				/>
				<span>{__( 'Flip vertically', metadata.textdomain )}</span>
			</div>

			<HorizontalRule />
			<div>
				<label>{__( "Curve Color", metadata.textdomain )}</label>
				<ColorPalette 
					value={props.attributes.topColor} 
					onChange={(newValue) => {
						props.setAttributes({
							topColor : newValue
						})
					}} 
				/>
			</div>
		</>

	);
}