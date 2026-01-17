import FreshStart from '@/assets/images/fresh-start.png';
import Link from '@/components/utils/Link';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import '@/styles/table.css';
import { getTranslation, type langs } from '@/translations';

export default function Season1_5() {
	const [lang] = useLocalStorage<langs>('lang', 'EN');
	return (
		<div style={{ width: '100%' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<img
					src={FreshStart}
					alt='RUSTICRAFT: FRESH START'
					style={{ width: '30vw', display: 'flex' }}
				/>
			</div>
			<span
				style={{
					border: '2px solid black',
					display: 'inline-flex',
					flexDirection: 'column',
				}}>
				<p>Table of Contents</p>
				<a href='#upload-order'>{getTranslation('UploadOrder', lang)}</a>
				<br />
				<a href='#meerpup1'>Meerpup1's Video</a>
				<br />
				<a href='#boxyplayz'>BoxyPlayz's Videos</a>
				<br />
				<a href='#splitzy'>Splitzy's Video</a>
				<br />
				<a href='#blizzard'>Blizzard's Video</a>
				<br />
				<a href='#theduckman'>The Duck Man's Video</a>
				<br />
			</span>
			<h1 id='upload-order'>{getTranslation('UploadOrder', lang)}</h1>
			<table>
				<thead>
					<tr>
						<th>Video</th>
						<th>Uploader</th>
						<th>Upload Date</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Link href='https://www.youtube.com/watch?v=LQlR_aPHHBs'>
								RustiCraft Season 1.5, Episode 1 –
								Building My Starter Base!
							</Link>
						</td>
						<td>Meerpup1</td>
						<td>November 29, 2025</td>
					</tr>
					<tr>
						<td>
							<Link href='https://www.youtube.com/watch?v=ztikeK2ta_c'>
								Rusticraft Events I
							</Link>
						</td>
						<td>BoxyPlayz</td>
						<td>November 29, 2025</td>
					</tr>
					<tr>
						<td>
							<Link href='https://www.youtube.com/watch?v=JNTArHhOr4g'>
								{' '}
								JUst another Laggy day on the
								RustiCraft SMP :D{' '}
							</Link>
						</td>
						<td>Splitzy</td>
						<td>December 7, 2025</td>
					</tr>
					<tr>
						<td>
							<Link href='https://www.youtube.com/watch?v=SCGahZRW5PY'>
								{' '}
								Rusticraft Subterranean Tunnels{' '}
							</Link>
						</td>
						<td>BoxyPlayz</td>
						<td>December 22, 2025</td>
					</tr>
					<tr>
						<td>
							<Link href='https://www.youtube.com/watch?v=oBpv8v3smKY'>
								Live🔴 Rusticraft SMP End Fight.
								Come Chill
							</Link>
						</td>
						<td>Blizzard</td>
						<td>December 22, 2025</td>
					</tr>
					<tr>
						<td>
							<Link href='https://www.youtube.com/watch?v=HQTgBUu8s9Q'>
								Deeper Tunnels
							</Link>
						</td>
						<td>BoxyPlayz</td>
						<td>December 25, 2025</td>
					</tr>
					<tr>
						<td>
							<Link href='https://www.youtube.com/watch?v=EfplqjWUPwo'>
								END FIGHT - TRAILER (Rusticraft
								season 1.5)
							</Link>
						</td>
						<td>The Duck Man</td>
						<td>December 28, 2025</td>
					</tr>
					<tr>
						<td>
							<Link href='https://www.youtube.com/watch?v=sVw0pRoZBAk'>
								Snow Farm | Rusticraft Season 1.5
								Episode 1
							</Link>
						</td>
						<td>BoxyPlayz</td>
						<td>December 31, 2025</td>
					</tr>
					<tr>
						<td>
							<Link href='https://www.youtube.com/watch?v=TTnjzAXMM1E'>
								Carpet Duping! | Rusticraft Season
								1.5 Episode 2
							</Link>
						</td>
						<td>BoxyPlayz</td>
						<td>January 3, 2025</td>
					</tr>
					<tr>
						<td>
							<Link href='https://youtu.be/KHg8Na5Dix8?si=HscvIorEO649AgJx'>
								Bamboo | Guardian Farm Part 1 |
								Rusticraft Season 1.5 Episode 3
							</Link>
						</td>
						<td>BoxyPlayz</td>
						<td>January 6, 2025</td>
					</tr>
					<tr>
						<td>
							<Link href='https://youtu.be/KwMoB_ZA2tg?si=xpVzS1fqw0DN8uYv'>
								Actual Materials | Guardian Farm
								Part 2 | Rusticraft Season 1.5
								Episode 4
							</Link>
						</td>
						<td>BoxyPlayz</td>
						<td>January 11, 2025</td>
					</tr>
					<tr>
						<td>
							<Link href='https://youtu.be/KGIM7Ag96Vo?si=a2goilWHEGZxnvD6'>
								The Farm | Guardian Farm Part 3 |
								Rusticraft Season 1.5 Episode 5
							</Link>
						</td>
						<td>BoxyPlayz</td>
						<td>January 17, 2025</td>
					</tr>
				</tbody>
			</table>
			<h1 id='meerpup1'>Meerpup1's Video</h1>
			<table>
				<thead>
					<tr>
						<th>Video</th>
						<th>Upload Date</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Link href='https://www.youtube.com/watch?v=LQlR_aPHHBs'>
								RustiCraft Season 1.5, Episode 1 –
								Building My Starter Base!
							</Link>
						</td>
						<td>November 29, 2025</td>
					</tr>
				</tbody>
			</table>
			<h1 id='boxyplayz'>BoxyPlayz's Videos</h1>
			<table>
				<thead>
					<tr>
						<th>Video</th>
						<th>Upload Date</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Link href='https://www.youtube.com/watch?v=ztikeK2ta_c'>
								Rusticraft Events I
							</Link>
						</td>
						<td>November 29, 2025</td>
					</tr>
					<tr>
						<td>
							<Link href='https://www.youtube.com/watch?v=SCGahZRW5PY'>
								Rusticraft Subterranean Tunnels
							</Link>
						</td>
						<td>December 22, 2025</td>
					</tr>
					<tr>
						<td>
							<Link href='https://www.youtube.com/watch?v=HQTgBUu8s9Q'>
								Deeper Tunnels
							</Link>
						</td>
						<td>December 25, 2025</td>
					</tr>
					<tr>
						<td>
							<Link href='https://www.youtube.com/watch?v=sVw0pRoZBAk'>
								Snow Farm | Rusticraft Season 1.5
								Episode 1
							</Link>
						</td>
						<td>December 31, 2025</td>
					</tr>
					<tr>
						<td>
							<Link href='https://www.youtube.com/watch?v=TTnjzAXMM1E'>
								Carpet Duping! | Rusticraft Season
								1.5 Episode 2
							</Link>
						</td>
						<td>January 3, 2025</td>
					</tr>
					<tr>
						<td>
							<Link href='https://youtu.be/KHg8Na5Dix8?si=HscvIorEO649AgJx'>
								Bamboo | Guardian Farm Part 1 |
								Rusticraft Season 1.5 Episode 3
							</Link>
						</td>
						<td>January 6, 2025</td>
					</tr>
					<tr>
						<td>
							<Link href='https://youtu.be/KwMoB_ZA2tg?si=xpVzS1fqw0DN8uYv'>
								Actual Materials | Guardian Farm
								Part 2 | Rusticraft Season 1.5
								Episode 4
							</Link>
						</td>
						<td>January 11, 2025</td>
					</tr>
					<tr>
						<td>
							<Link href='https://youtu.be/KGIM7Ag96Vo?si=a2goilWHEGZxnvD6'>
								The Farm | Guardian Farm Part 3 |
								Rusticraft Season 1.5 Episode 5
							</Link>
						</td>
						<td>January 17, 2025</td>
					</tr>
				</tbody>
			</table>
			<h1 id='splitzy'>Splitzy's Video</h1>
			<table>
				<thead>
					<tr>
						<th>Video</th>
						<th>Upload Date</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Link href='https://www.youtube.com/watch?v=JNTArHhOr4g'>
								JUst another Laggy day on the
								RustiCraft SMP :D
							</Link>
						</td>
						<td>December 7, 2025</td>
					</tr>
				</tbody>
			</table>
			<h1 id='blizzard'>Blizzard's Video</h1>
			<table>
				<thead>
					<tr>
						<th>Video</th>
						<th>Upload Date</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Link href='https://www.youtube.com/watch?v=oBpv8v3smKY'>
								Live🔴 Rusticraft SMP End Fight.
								Come Chill
							</Link>
						</td>
						<td>December 22, 2025</td>
					</tr>
				</tbody>
			</table>
			<h1 id='theduckman'>The Duck Man's Video</h1>
			<table>
				<thead>
					<tr>
						<th>Video</th>
						<th>Upload Date</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Link href='https://www.youtube.com/watch?v=EfplqjWUPwo'>
								END FIGHT - TRAILER (Rusticraft
								season 1.5)
							</Link>
						</td>
						<td>December 28, 2025</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
