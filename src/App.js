import React, { useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Button, Container, Box, Paper, Grid } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const sounds = [
	{
		key: 'Q',
		clip: 'Heater 1',
		src: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/24[kb]bonger-kick.wav.mp3',
	},
	{
		key: 'W',
		clip: 'Heater 2',
		src: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/24[kb]bonger-kick.wav.mp3',
	},
	{
		key: 'E',
		clip: 'Heater 3',
		src: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/24[kb]bonger-kick.wav.mp3',
	},
	{
		key: 'A',
		clip: 'Heater 4',
		src: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/24[kb]bonger-kick.wav.mp3',
	},
	{
		key: 'S',
		clip: 'Clap',
		src: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/24[kb]bonger-kick.wav.mp3',
	},
	{
		key: 'D',
		clip: 'Open HH',
		src: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/24[kb]bonger-kick.wav.mp3',
	},
	{
		key: 'Z',
		clip: 'Kick n Hat',
		src: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/24[kb]bonger-kick.wav.mp3',
	},
	{
		key: 'X',
		clip: 'Kick',
		src: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/24[kb]bonger-kick.wav.mp3',
	},
	{
		key: 'C',
		clip: 'Closed HH',
		src: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/24[kb]bonger-kick.wav.mp3',
	},
];

function App() {
	const [text, setText] = useState('start');
	const [keyPressed, setKeyPressed] = useState('');

	const playAudio = (audioInfo) => {
		setText(audioInfo.clip);
		var audio = document.getElementById(audioInfo.key);
		audio.play();
	};

	const handler = (event) => {
		const keyPressed = event.key;
		const toPlay = sounds.find(
			(element) => element.key === keyPressed.toUpperCase()
		);
		if (toPlay) {
			playAudio(toPlay);
		}
		setKeyPressed(event.key);
	};

	return (
		<Container id="drum-machine" className="App" maxWidth="sm">
			<Box sx={{ flexGrow: 1 }}>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					<Grid item xs={12}>
						<Item id="display">
							{text} : Key pressed {keyPressed}
						</Item>
					</Grid>
					{sounds.map((element, index) => (
						<Grid item xs={2} sm={4} md={4} key={index}>
							<Button
								onKeyPress={(e) => handler(e)}
								variant="contained"
								onClick={() => playAudio(element)}
								id={element.src}
								className="drum-pad"
							>
								{element.key}
								<audio id={element.key} src={element.src} className="clip" />
							</Button>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
}

export default App;
