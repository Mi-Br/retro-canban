import styled from "styled-components";
import "./App.css";

function App() {
	return (
		<Wrapper>
			<Board>
				<div>Menu</div>
				<div>Main window</div>
			</Board>
			<p style={{ marginBlock: "10px" }}>Task manager:\</p>
			<ShortcutNav>Navigation</ShortcutNav>
		</Wrapper>
	);
}

export default App;

const Wrapper = styled.div`
	background-color: var(--color-blue);
	height: 100%;
	display: grid;
	grid-template-rows: 1fr auto auto;
	padding: 8px;
`;

const Board = styled.div`
	height: 100%;
	display: grid;
	gap: 5px;
	grid-template-columns: 200px 1fr;

	& > div {
		outline: 1px solid var(--color-selected-primary);
	}
`;
const ShortcutNav = styled.nav``;
