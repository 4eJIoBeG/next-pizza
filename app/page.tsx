import {
	Container,
	Filters,
	ProductCard,
	ProductsGroupList,
	Title,
	TopBar,
} from '@/components/shared'

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='Главная' size='lg' className='font-extrabold' />
			</Container>
			<TopBar />

			<Container className='mt-10 pb-14'>
				<div className='flex gap-[60px]'>
					{/* Фильтрация */}
					<div className='w-[250px]'>
						<Filters />
					</div>
					{/* Товары */}
					<div className='flex-1'></div>
					<div className='flex flex-col gap-16'>
						<ProductsGroupList
							title='Пицца'
							categoryId={1}
							items={[
								{
									id: 1,
									name: 'Вкусная',
									imageUrl:
										'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
									price: 550,
									items: [{ price: 550 }, { price: 650 }, { price: 700 }],
								},
								{
									id: 2,
									name: 'Вкусная',
									imageUrl:
										'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
									price: 550,
									items: [{ price: 550 }, { price: 650 }, { price: 700 }],
								},
								{
									id: 3,
									name: 'Вкусная',
									imageUrl:
										'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
									price: 550,
									items: [{ price: 550 }, { price: 650 }, { price: 700 }],
								},
								{
									id: 4,
									name: 'Вкусная',
									imageUrl:
										'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
									price: 550,
									items: [{ price: 550 }, { price: 650 }, { price: 700 }],
								},
							]}
						/>
						<ProductsGroupList
							title='Комбо'
							categoryId={2}
							items={[
								{
									id: 1,
									name: 'Вкусная',
									imageUrl:
										'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
									price: 550,
									items: [{ price: 550 }, { price: 650 }, { price: 700 }],
								},
								{
									id: 2,
									name: 'Вкусная',
									imageUrl:
										'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
									price: 550,
									items: [{ price: 550 }, { price: 650 }, { price: 700 }],
								},
								{
									id: 3,
									name: 'Вкусная',
									imageUrl:
										'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
									price: 550,
									items: [{ price: 550 }, { price: 650 }, { price: 700 }],
								},
								{
									id: 4,
									name: 'Вкусная',
									imageUrl:
										'https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif',
									price: 550,
									items: [{ price: 550 }, { price: 650 }, { price: 700 }],
								},
							]}
						/>
					</div>
				</div>
			</Container>
		</>
	)
}
