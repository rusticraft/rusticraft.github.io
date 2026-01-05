import Human from '@/components/person';
import DuckManHead from "@/assets/heads/duckman.png"
import Proper from "@/assets/heads/proper.png"
import DrCheff from "@/assets/heads/cheff.png"
import Rain from "@/assets/heads/rain.png"
import Radison from "@/assets/heads/radison.png"
import Random from "@/assets/heads/random.png"
import Flame from "@/assets/heads/flame.png"
import NoCakez from "@/assets/heads/nocakez.png"
import Blizzard from "@/assets/heads/blizzard.png"
import Splitzy from "@/assets/heads/splitzydfg.png"
import Meerpup from "@/assets/heads/meerpup1.png"
import BoxyPlayz from "@/assets/heads/boxyplayz.png"

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
				skin={BoxyPlayz}
				name='BoxyPlayz'
				description='Builder of the site! :D'
				joined={1}
				latest='https://www.youtube.com/watch?v=TTnjzAXMM1E'
				youtube='https://www.youtube.com/@BoxyPlayz0'
				trivia={['Web Designer']}
			/>
			<Human
				skin={Meerpup}
				name='Meerpup1'
				description='Server Owner'
				joined={1}
				latest='https://www.youtube.com/watch?v=LQlR_aPHHBs'
				youtube='https://www.youtube.com/@meerpup1'
			/>
			<Human
				skin={Splitzy}
				name='Splitzy'
				joined={1.5}
				latest='https://www.youtube.com/watch?v=JNTArHhOr4g'
				youtube='https://www.youtube.com/@splitzydfg'
				description='the Mace legend'
			/>
			<Human
				skin={Blizzard}
				name='Blizzard'
				joined={1}
				latest='https://www.youtube.com/watch?v=oBpv8v3smKY'
				youtube='https://www.youtube.com/@Blizzard_Animate'
			/>
			<Human
				skin={NoCakez}
				name='NoCakez'
				joined={1}
				youtube='https://www.youtube.com/@TheAlienYouTuber'
				trivia={['NoCakez is leaving temporarily until season 2.']}
				left={1.5}
			/>
			<Human
				skin={Flame}
				name='FlameRV'
				joined={1}
				youtube='https://www.youtube.com/@FlameRV2008'
				latest='https://www.youtube.com/watch?v=xyONh2jlbgs'
			/>
			<Human
				skin={Random}
				name='Random'
				joined={1}
				youtube='https://www.youtube.com/@a-random-show'
				latest='https://www.youtube.com/watch?v=WPvvAHm4izA'
			/>
			<Human
				skin={Radison}
				name='Radison'
				joined={1}
				youtube='https://www.youtube.com/@radistongamer'
			/>
			<Human
				skin={Proper}
				name='Proper Gamer'
				joined={1}
				youtube='https://www.youtube.com/@Proper_Gamer13'
			/>
			<Human
				skin={DuckManHead}
				name='The Duck Man'
				joined={1}
				youtube='https://www.youtube.com/@the_duckman1'
				latest='https://www.youtube.com/watch?v=EfplqjWUPwo'
			/>
			<Human
				skin={DrCheff}
				name='DrCheff'
				joined={1}
				youtube='https://www.youtube.com/@DrCheff'
			/>
			<Human
				skin={Rain}
				name='RainNova'
				joined={1}
				youtube='https://www.youtube.com/@rainnova-z5i'
			/>
		</div>
	);
}
