import styled from 'styled-components';
import Button from '../../../../components/button/Button';
import { FlexContainer } from '../../../../components/flexContainer/FlexContainer';
import { GreenText } from '../../../../components/greenText/GreenText';

function PictureAfter() {
	return (
		<StyledBlock>
			<FlexContainer style={{ marginBottom: '25px' }}>
				<FlexContainer direction='column' align='start'>
					<GreenText>Ends in</GreenText>
					<StyledDate>05:45:47</StyledDate>
				</FlexContainer>
				<FlexContainer
					style={{ marginTop: '8px' }}
					direction='column'
					align='start'
				>
					<GreenText>Current bid</GreenText>
					<StyledDate>0.24ETH</StyledDate>
				</FlexContainer>
			</FlexContainer>
			<Button title='Place A Bid' />
		</StyledBlock>
	);
}

const StyledBlock = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 304px;
	padding: 20px;
	border-radius: 16px;
	border-top: 1px solid #d3f85a;
	background: #131e3a;
	box-shadow: 0px 9px 50px 0px rgba(23, 36, 65, 0.04);
	text-align: center;
`;

const StyledDate = styled.span`
	font-weight: 700;
`;

export default PictureAfter;