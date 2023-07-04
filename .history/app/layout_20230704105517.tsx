import './globals.css';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

export const metadata = {
	title: 'Car Hub',
	description: 'Discover the best cars in the world.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body className='relative'>{children}</body>
		</html>
	);
}
