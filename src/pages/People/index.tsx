import Human from '@/components/person';

export default function People() {
	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
				gap: '16px',
			}}>
			<Human
				skin='/heads/boxyplayz.png'
				name='BoxyPlayz'
				description='Builder of the site! :D'
				joined={1}
				latest='https://www.youtube.com/watch?v=TTnjzAXMM1E'
				youtube='https://www.youtube.com/@BoxyPlayz0'
				trivia={['Web Designer']}
			/>
			<Human
				skin='/heads/meerpup1.png'
				name='Meerpup1'
				description='Server Owner'
				joined={1}
				latest='https://www.youtube.com/watch?v=LQlR_aPHHBs'
				youtube='https://www.youtube.com/@meerpup1'
			/>
			<Human
				skin='/heads/splitzydfg.png'
				name='Splitzy'
				joined={1.5}
				latest='https://www.youtube.com/watch?v=JNTArHhOr4g'
				youtube='https://www.youtube.com/@splitzydfg'
				description='the Mace legend'
			/>
			<Human
				skin='/heads/blizzard.png'
				name='Blizzard'
				joined={1}
				latest='https://www.youtube.com/watch?v=oBpv8v3smKY'
				youtube='https://www.youtube.com/@Blizzard_Animate'
			/>
			<Human
				skin='/heads/nocakez.png'
				name='NoCakez'
				joined={1}
				youtube='https://www.youtube.com/@TheAlienYouTuber'
				trivia={['NoCakez is leaving temporarily until season 2.']}
				left={1.5}
			/>
			<Human
				skin='/heads/flame.png'
				name='FlameRV'
				joined={1}
				youtube='https://www.youtube.com/@FlameRV2008'
				latest='https://www.youtube.com/watch?v=xyONh2jlbgs'
			/>
			<Human
				skin='/heads/random.png'
				name='Random'
				joined={1}
				youtube='https://www.youtube.com/@a-random-show'
				latest='https://www.youtube.com/watch?v=WPvvAHm4izA'
			/>
			<Human
				skin='/heads/radison.png'
				name='Radison'
				joined={1}
				youtube='https://www.youtube.com/@radistongamer'
			/>
			<Human
				skin='/heads/proper.png'
				name='Proper Gamer'
				joined={1}
				youtube='https://www.youtube.com/@Proper_Gamer13'
			/>
			<Human
				skin='/heads/duckman.png'
				name='The Duck Man'
				joined={1}
				youtube='https://www.youtube.com/@the_duckman1'
				latest='https://www.youtube.com/watch?v=EfplqjWUPwo'
			/>
			<Human
				skin='/heads/cheff.png'
				name='DrCheff'
				joined={1}
				youtube='https://www.youtube.com/@DrCheff'
			/>
			<Human
				skin='/heads/rain.png'
				name='RainNova'
				joined={1}
				youtube='https://www.youtube.com/@rainnova-z5i'
			/>
		</div>
	);
}
