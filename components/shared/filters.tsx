import React from 'react'
import { Title } from './title'
import { FilterCheckbox } from './filter-checkbox'
import { Input } from '../ui'
import { RangeSlider } from './range-slider'
import { CheckboxFiltersGroup } from './checkbox-filters-group'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />
			{/* Верхние чекбоксы */}
			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Можно собирать' value='1' />
				<FilterCheckbox text='Новинки' value='2' />
			</div>

			{/* Фильтрация цен */}
			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-3'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={3000}
						defaultValue={0}
					/>
					<Input type='number' placeholder='3000' min={100} max={3000} />
				</div>
				<RangeSlider min={0} max={3000} step={10} value={[0, 3000]} />
			</div>

			{/* Фильтрация по ингредиентам */}
			<CheckboxFiltersGroup
				title='Ингредиенты'
				className='mt-5'
				limit={6}
				defaultItems={[
					{ text: 'Сырный соус', value: '1' },
					{ text: 'Чеснок', value: '2' },
					{ text: 'Колбаса', value: '3' },
					{ text: 'Томат', value: '4' },
					{ text: 'Перец', value: '5' },
					{ text: 'Моццарелла', value: '6' },
				]}
				items={[
					{ text: 'Сырный соус', value: '1' },
					{ text: 'Чеснок', value: '2' },
					{ text: 'Колбаса', value: '3' },
					{ text: 'Томат', value: '4' },
					{ text: 'Перец', value: '5' },
					{ text: 'Моццарелла', value: '6' },
					{ text: 'Огурчики', value: '7' },
					{ text: 'Салат', value: '8' },
				]}
			/>
		</div>
	)
}
