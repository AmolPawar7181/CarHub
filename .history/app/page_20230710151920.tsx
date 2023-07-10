'use client';
import {CarCard, CustomFilter, Hero, SearchBar, ShowMore} from '@/components';
import {fuels, yearsOfProduction} from '@/constants';
import {fetchCars} from '@/utils';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {CarState} from '@/types';

export default function Home() {
	const [allCars, setAllCars] = useState<CarState>([]);
	const [loading, setLoading] = useState(false);
	// search states
	const [manufacturer, setManufacturer] = useState('');
	const [model, setModel] = useState('');

	// filter states
	const [fuel, setFuel] = useState('');
	const [year, setYear] = useState(2022);

	//pagination state
	const [limit, setLimit] = useState(10);

	// get cars from backend
	const getCars = async () => {
		setLoading(true);
		try {
			const result = await fetchCars({
				manufacturer: manufacturer || '',
				year: year || 2022,
				fuel: fuel || '',
				limit: limit || 10,
				model: model || '',
			});
			setAllCars(result);
		} catch (e) {
			console.log('error ', e);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getCars();
	}, [fuel, year, limit, manufacturer, model]);

	return (
		<main className='overflow-hidden'>
			{/** Hero section with text and image */}
			<Hero />
			<div className='mt-12 padding-x padding-y max-width' id='discover'>
				<div className='gome__text-container'>
					<h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
					<p>Explore the cars you might like</p>
				</div>
				<div className='home__filters'>
					{/** manufacturer and model search box */}
					<SearchBar setManufacturer={setManufacturer} setModel={setModel} />
					<div className='home__filter-container'>
						{/** Dropdown filters */}
						<CustomFilter options={fuels} setFilter={setFuel} />
						<CustomFilter options={yearsOfProduction} setFilter={setYear} />
					</div>
				</div>
				{/** Car card */}
				{allCars.length > 0 ? (
					<section>
						<div className='home__cars-wrapper'>
							{allCars?.map((car, index) => (
								<CarCard car={car} key={car.model + index} />
							))}
						</div>
						{loading && (
							<div className='mt-16 w-full flex-center'>
								<Image
									src='/loader.svg'
									alt='loader'
									width={50}
									height={50}
									className='object-contain'
								/>
							</div>
						)}
						{/* show more car button */}
						<ShowMore
							pageNumber={limit / 10}
							isNext={limit > allCars.length}
							setLimit={setLimit}
						/>
					</section>
				) : (
					<div className='home__error-container'>
						<h2 className='text-black text-xl font-bold'>Oops, no results</h2>
						<p>{allCars?.message}</p>
					</div>
				)}
			</div>
		</main>
	);
}
