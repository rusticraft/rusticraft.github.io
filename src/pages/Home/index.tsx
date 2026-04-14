import Logo from '@/assets/images/rusticraft-logo.png';

export default function Home() {
	return (
		<div style={{ width: '100%' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<img
					src={Logo}
					alt='RUSTICRAFT'
					style={{ width: '40vw', display: 'flex' }}
				/>
			</div>
			<p>The official Website for the Rusticraft SMP</p>
			<a href="https://drive.google.com/file/d/16BtMkaHFZ1H9DU0qZt9IwHSIfXdtJ4No/view?usp=sharing" target={"_blank"} rel={"noopener"}>Season 1 World Download</a>
		</div>
	);
}
