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
import BlackJotunn from "@/assets/heads/blackjotunn.png"

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
				head={BoxyPlayz}
				name='BoxyPlayz'
				description='Builder of the site! :D'
				firstSeason={1}
				latestEpisode='https://www.youtube.com/watch?v=TTnjzAXMM1E'
				youtubeChannelUrl='https://www.youtube.com/@BoxyPlayz0'
				trivia={['Web Designer']}
				latestSeason={1.5}
			/>
			<Human
				head={Meerpup}
				name='Meerpup1'
				description='Server Owner'
				firstSeason={1}
				latestEpisode='https://www.youtube.com/watch?v=LQlR_aPHHBs'
				youtubeChannelUrl='https://www.youtube.com/@meerpup1'
				latestSeason={1.5}
			/>
			<Human
				head={Splitzy}
				name='Splitzy'
				firstSeason={1.5}
				latestEpisode='https://www.youtube.com/watch?v=JNTArHhOr4g'
				youtubeChannelUrl='https://www.youtube.com/@splitzydfg'
				description='the Mace legend'
			/>
			<Human
				head={Blizzard}
				name='Blizzard'
				firstSeason={1}
				latestEpisode='https://www.youtube.com/watch?v=oBpv8v3smKY'
				youtubeChannelUrl='https://www.youtube.com/@Blizzard_Animate'
				latestSeason={1.5}
			/>
			<Human
				head={NoCakez}
				name='NoCakez'
				firstSeason={1}
				youtubeChannelUrl='https://www.youtube.com/@TheAlienYouTuber'
				trivia={['NoCakez is leaving temporarily until season 2.']}
				latestSeason={1.5}
			/>
			<Human
				head={Flame}
				name='FlameRV'
				firstSeason={1}
				youtubeChannelUrl='https://www.youtube.com/@FlameRV2008'
				latestEpisode='https://www.youtube.com/watch?v=xyONh2jlbgs'
				latestSeason={1.5}
			/>
			<Human
				head={Random}
				name='Random'
				firstSeason={1}
				youtubeChannelUrl='https://www.youtube.com/@a-random-show'
				latestEpisode='https://www.youtube.com/watch?v=WPvvAHm4izA'
				latestSeason={1.5}
			/>
			<Human
				head={Radison}
				name='Radison'
				firstSeason={1}
				youtubeChannelUrl='https://www.youtube.com/@radistongamer'
				latestSeason={1.5}
			/>
			<Human
				head={Proper}
				name='Proper Gamer'
				firstSeason={1}
				youtubeChannelUrl='https://www.youtube.com/@Proper_Gamer13'
				latestSeason={1.5}
			/>
			<Human
				head={DuckManHead}
				name='The Duck Man'
				firstSeason={1}
				youtubeChannelUrl='https://www.youtube.com/@the_duckman1'
				latestEpisode='https://www.youtube.com/watch?v=EfplqjWUPwo'
				latestSeason={1.5}
			/>
			<Human
				head={DrCheff}
				name='DrCheff'
				firstSeason={1}
				youtubeChannelUrl='https://www.youtube.com/@DrCheff'
				latestSeason={1.5}
			/>
			<Human
				head={Rain}
				name='RainNova'
				firstSeason={1}
				youtubeChannelUrl='https://www.youtube.com/@rainnova-z5i'
				latestSeason={1.5}
			/>
			<Human
				head={BlackJotunn}
				name='Black Jotunn'
				firstSeason={1}
				youtubeChannelUrl='https://www.youtube.com/@blackjotunn'
			/>
		</div>
	);
}
