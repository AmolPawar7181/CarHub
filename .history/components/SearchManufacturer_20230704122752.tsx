'use client';

import {Combobox, Transition} from '@headlessui/react';
import {SerachManufacturerProps} from '@/types';

const SearchManufacturer = ({
	manufacturer,
	setManufacturer,
}: SerachManufacturerProps) => {
	return (
		<div className='search-manufacturer'>
			<Combobox>
				<div className='relative w-full'></div>
			</Combobox>
		</div>
	);
};

export default SearchManufacturer;
