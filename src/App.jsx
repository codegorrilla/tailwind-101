import Container from './components/Container';
import Columns from './components/Columns';
import PersonList from './components/PersonList';
import './App.css';

function App() {
	return (
		<>
			<Container>
				<Columns />
				<PersonList />
			</Container>
		</>
	);
}

export default App;
