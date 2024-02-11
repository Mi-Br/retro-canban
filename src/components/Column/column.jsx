import React from "react";
import styled from "styled-components";

function Column({ children }) {
	return <StyledColumn>{children}</StyledColumn>;
}

export default Column;

const StyledColumn = styled.div`
	min-width: 300px;
`;
