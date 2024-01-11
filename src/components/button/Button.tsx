import styled from 'styled-components';

type ButtonType = {
	title: string;
};

type ButtonStyleType = {
	color?: string;
	bgColor?: string;
	border?: string;
};

function Button(props: ButtonType) {
	return <StyledBtn>{props.title}</StyledBtn>;
}

const StyledBtn = styled.button<ButtonStyleType>`
	padding: 12px 40px;
	font-size: 16px;
	font-weight: 700;
	border-radius: 8px;
	cursor: pointer;
	color: ${props => props.color || '#090f1d'};
	background-color: ${props => props.bgColor || '#D3F85A'};
	border: ${props => props.border || 'none'};
`;

export default Button;