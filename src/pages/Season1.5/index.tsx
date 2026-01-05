import Link from '@/components/utils/Link';
import '@/styles/table.css';
import FreshStart from "@/assets/images/fresh-start.png"

export default function Season1() {
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
				<a href='#upload-order'>Upload Order</a>
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
			<h1 id='upload-order'>Upload Order</h1>
			<table>
				<tr>
					<th>Video</th>
					<th>Uploader</th>
					<th>Upload Date</th>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=LQlR_aPHHBs'>
							RustiCraft Season 1.5, Episode 1 – Building
							My Starter Base!
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
							JUst another Laggy day on the RustiCraft SMP
							:D{' '}
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
							Live🔴 Rusticraft SMP End Fight. Come Chill
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
							END FIGHT - TRAILER (Rusticraft season 1.5)
						</Link>
					</td>
					<td>The Duck Man</td>
					<td>December 28, 2025</td>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=sVw0pRoZBAk'>
							Rusticraft Season 1.5 (Technically) Episode
							1: Snow Farm and (not) Carpet Duping
						</Link>
					</td>
					<td>BoxyPlayz</td>
					<td>December 31, 2025</td>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=TTnjzAXMM1E'>
							Rusticraft Season 1.5 Episode 2
						</Link>
					</td>
					<td>BoxyPlayz</td>
					<td>January 3, 2025</td>
				</tr>
			</table>
			<h1 id='meerpup1'>Meerpup1's Video</h1>
			<table>
				<tr>
					<th>Video</th>
					<th>Uploader</th>
					<th>Upload Date</th>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=LQlR_aPHHBs'>
							RustiCraft Season 1.5, Episode 1 – Building
							My Starter Base!
						</Link>
					</td>
					<td>Meerpup1</td>
					<td>November 29, 2025</td>
				</tr>
			</table>
			<h1 id='boxyplayz'>BoxyPlayz's Videos</h1>
			<table>
				<tr>
					<th>Video</th>
					<th>Upload Date</th>
				</tr>
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
							Rusticraft Season 1.5 (Technically) Episode
							1: Snow Farm and (not) Carpet Duping
						</Link>
					</td>
					<td>December 31, 2025</td>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=TTnjzAXMM1E'>
							Rusticraft Season 1.5 Episode 2
						</Link>
					</td>
					<td>January 3, 2025</td>
				</tr>
			</table>
			<h1 id='splitzy'>Splitzy's Video</h1>
			<table>
				<tr>
					<th>Video</th>
					<th>Upload Date</th>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=JNTArHhOr4g'>
							JUst another Laggy day on the RustiCraft SMP
							:D
						</Link>
					</td>
					<td>December 7, 2025</td>
				</tr>
			</table>
			<h1 id='blizzard'>Blizzard's Video</h1>
			<table>
				<tr>
					<th>Video</th>
					<th>Upload Date</th>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=oBpv8v3smKY'>
							Live🔴 Rusticraft SMP End Fight. Come Chill
						</Link>
					</td>
					<td>December 22, 2025</td>
				</tr>
			</table>
			<h1 id='theduckman'>The Duck Man's Video</h1>
			<table>
				<tr>
					<th>Video</th>
					<th>Upload Date</th>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=EfplqjWUPwo'>
							END FIGHT - TRAILER (Rusticraft season 1.5)
						</Link>
					</td>
					<td>December 28, 2025</td>
				</tr>
			</table>
		</div>
	);
}
