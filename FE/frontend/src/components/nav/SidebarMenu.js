import styled from 'styled-components';

const SidebarMenu = styled.ul`
	min-width: 250px;
	height: 100%;
	background-color: ${props => `${props.theme.sidebarColor}`};
	box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.15);
`;

export default SidebarMenu;
