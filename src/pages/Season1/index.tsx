import Link from '@/components/utils/Link';
import '@/styles/table.css';
import NewBeginnings from "@/assets/images/new-beginnings.png"

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
					src={NewBeginnings}
					alt='RUSTICRAFT: NEW BEGINNINGS'
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
				<a href='#random'>Random's Videos</a>
				<br />
				<a href='#blizzard'>Blizzard's Videos</a>
				<br />
				<a href='#flame'>FlameRV's Video</a>
				<br />
				<a href='#black-jotunn'>Black Jotunn's Video</a>
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
						<Link href='https://www.youtube.com/watch?v=XLus9AJ2-jI'>
							RustiCraft ep0: How I ”lost” 3 hours of
							footage
						</Link>
					</td>
					<td>Random</td>
					<td>July 8, 2025</td>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=xyONh2jlbgs'>
							Home Sweet Home | RustiCraft Ep 1| Minecraft
						</Link>
					</td>
					<td>FlameRV</td>
					<td>July 12, 2025</td>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=WPvvAHm4izA'>
							RustiCraft SMP ep1: Imprisoning some
							piligers :D
						</Link>
					</td>
					<td>Random</td>
					<td>July 19, 2025</td>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=no_Urv0ybl8'>
							Live🔴 Rusticraft SMP W/ Kitten Cam
						</Link>
					</td>
					<td>Blizzard</td>
					<td>July 19, 2025</td>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=4qb7bNec-bk'>
							Live🔴 Rusticraft SMP End Fight! Happening
							Now! W/ Kitten Cam
						</Link>
					</td>
					<td>Blizzard</td>
					<td>July 21, 2025</td>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=189xKb34bTY'>
							Rusticraft Ep1( The Rise Of The Blizzard
							Empire
						</Link>
					</td>
					<td>Blizzard</td>
					<td>July 21, 2025</td>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=8QISvJ6IS-4'>
							eerste dag op rusticraft meteen end fight
						</Link>
					</td>
					<td>Black Jotunn</td>
					<td>July 22, 2025</td>
				</tr>
			</table>
			<h1 id='random'>Random's Videos</h1>
			<table>
				<tr>
					<th>Video</th>
					<th>Upload Date</th>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=XLus9AJ2-jI'>
							RustiCraft ep0: How I ”lost” 3 hours of
							footage
						</Link>
					</td>
					<td>July 8, 2025</td>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=WPvvAHm4izA'>
							RustiCraft SMP ep1: Imprisoning some
							piligers :D
						</Link>
					</td>
					<td>July 19, 2025</td>
				</tr>
			</table>
			<h1 id='blizzard'>Blizzard's Videos</h1>
			<table>
				<tr>
					<th>Video</th>
					<th>Upload Date</th>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=no_Urv0ybl8'>
							Live🔴 Rusticraft SMP W/ Kitten Cam
						</Link>
					</td>
					<td>July 19, 2025</td>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=4qb7bNec-bk'>
							Live🔴 Rusticraft SMP End Fight! Happening
							Now! W/ Kitten Cam
						</Link>
					</td>
					<td>July 21, 2025</td>
				</tr>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=189xKb34bTY'>
							Rusticraft Ep1( The Rise Of The Blizzard
							Empire
						</Link>
					</td>
					<td>July 21, 2025</td>
				</tr>
			</table>
			<h1 id='flame'>FlameRV's Video</h1>
			<table>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=xyONh2jlbgs'>
							Home Sweet Home | RustiCraft Ep 1| Minecraft
						</Link>
					</td>
					<td>FlameRV</td>
					<td>July 12, 2025</td>
				</tr>
			</table>
			<h1 id='black-jotunn'>Black Jotunn's Video</h1>
			<table>
				<tr>
					<td>
						<Link href='https://www.youtube.com/watch?v=8QISvJ6IS-4'>
							eerste dag op rusticraft meteen end fight
						</Link>
					</td>
					<td>Black Jotunn</td>
					<td>July 22, 2025</td>
				</tr>
			</table>
		</div>
	);
}
