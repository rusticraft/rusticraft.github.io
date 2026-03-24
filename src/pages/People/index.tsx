import BlackJotunn from '@/assets/heads/blackjotunn.png';
import Blizzard from '@/assets/heads/blizzard.png';
import BoxyPlayz from '@/assets/heads/boxyplayz.png';
import DrCheff from '@/assets/heads/cheff.png';
import DuckManHead from '@/assets/heads/duckman.png';
import Flame from '@/assets/heads/flame.png';
import Meerpup from '@/assets/heads/meerpup1.png';
import NoCakez from '@/assets/heads/nocakez.png';
import Proper from '@/assets/heads/proper.png';
import Radison from '@/assets/heads/radison.png';
import Rain from '@/assets/heads/rain.png';
import Random from '@/assets/heads/random.png';
import Splitzy from '@/assets/heads/splitzydfg.png';
import Human from '@/components/person';
import Mask from '@/assets/heads/mask.png'
import Frankie from '@/assets/heads/frankie.png'

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
				latestEpisode='https://youtu.be/y40h55FUvOA?si=HMkB3x2ofwFxVIfk'
				youtubeChannelUrl='https://www.youtube.com/@BoxyPlayz0'
				latestEpisodeTitle=' Rusticraft Events 2 '
				trivia={['Web Designer']}
				latestSeason={1.5}
			/>
			<Human
				head={Meerpup}
				name='Meerpup1'
				description='Server Owner'
				firstSeason={1}
				latestEpisode='https://www.youtube.com/watch?v=In3n9gUExZg'
				latestEpisodeTitle='RustiCraft Season 1.5, Episode 2 – Spawn Build!'
				youtubeChannelUrl='https://www.youtube.com/@meerpup1'
				latestSeason={1.5}
			/>
			<Human
				head={Splitzy}
				name='Splitzy'
				firstSeason={1.5}
				latestEpisode='https://www.youtube.com/watch?v=JNTArHhOr4g'
				latestEpisodeTitle='JUst another Laggy day on the RustiCraft SMP :D'
				youtubeChannelUrl='https://www.youtube.com/@splitzydfg'
				description='The Prankster'
			/>
			<Human
				head={Blizzard}
				name='Blizzard'
				firstSeason={1}
				latestEpisode='https://www.youtube.com/watch?v=oBpv8v3smKY'
				youtubeChannelUrl='https://www.youtube.com/@Blizzard_Animate'
				latestEpisodeTitle='Live🔴 Rusticraft SMP End Fight. Come Chill'
				latestSeason={1.5}
			/>
			<Human
				head={NoCakez}
				name='NoCakez'
				firstSeason={1}
				youtubeChannelUrl='https://www.youtube.com/@TheAlienYouTuber'
				latestSeason={1.5}
				left
			/>
			<Human
				head={Flame}
				name='FlameRV'
				firstSeason={1}
				youtubeChannelUrl='https://www.youtube.com/@FlameRV2008'
				latestEpisode='https://www.youtube.com/watch?v=xyONh2jlbgs'
				latestEpisodeTitle='Home Sweet Home | RustiCraft Ep 1| Minecraft'
				latestSeason={1.5}
				left
			/>
			<Human
				head={Random}
				name='Random'
				firstSeason={1}
				youtubeChannelUrl='https://www.youtube.com/@a-random-show'
				latestEpisode='https://www.youtube.com/watch?v=-kqwIt-UbTA'
				latestEpisodeTitle='When you play Minecraft whit that friend'
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
				latestEpisodeTitle='END FIGHT - TRAILER (Rusticraft season 1.5)'
				latestSeason={1.5}
			/>
			<Human
				head={DrCheff}
				name='DrCheff'
				firstSeason={1}
				youtubeChannelUrl='https://www.youtube.com/@DrCheff'
				latestSeason={1.5}
				left
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
				latestEpisode='https://www.youtube.com/watch?v=8QISvJ6IS-4'
				latestEpisodeTitle='eerste dag op rusticraft meteen end fight'
				left
			/>
			<Human
				head={Mask}
				name='Mask'
				firstSeason={1.5}
				youtubeChannelUrl='https://www.youtube.com/@Maskedmcyt'
				latestSeason={1.5}
			/>
			<Human
				head={Frankie}
				name='Se7zz'
				firstSeason={1.5}
				youtubeChannelUrl='https://www.youtube.com/@Se7zz'
			/>
		</div>
	);
}
