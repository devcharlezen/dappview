import * as React from 'react'

export interface IColumnProps {
	header: string
	accessor: string
	disableSortBy?: boolean
	helperText?: string
	Cell?: any
}

export interface IRowProps {
	columns: IColumnProps[]
	item: { [key: string]: any }
	index?: number
	subRow?: boolean
}

export interface ITableProps {
	columns: IColumnProps[]
	data: unknown
	align?: string
	gap?: string
	pinnedRow?: unknown
	style?: React.CSSProperties
}

export type TColumns =
	| 'protocolName'
	| 'peggedAsset'
	| 'peggedAssetChain'
	| 'category'
	| 'chainName'
	| 'chains'
	| '1dChange'
	| '7dChange'
	| '1mChange'
	| 'tvl'
	| 'mcaptvl'
	| 'listedAt'
	| 'msizetvl'
	| 'protocols'
	| 'dexName'
	| 'totalVolume24h'

export interface INameProps {
	type: 'chain' | 'protocol' | 'peggedAsset' | 'peggedAssetChain' | 'dex'
	value: string
	symbol?: string
	index?: number
	bookmark?: boolean
	rowType?: 'pinned' | 'accordion' | 'child' | 'default'
	showRows?: boolean
}

export interface INameYield extends Omit<INameProps, 'type'> {
	project: string
	projectslug: string
	airdrop?: boolean
}

export interface INameYieldPoolProps {
	value: string
	poolId: string
	project: string
	url: string
	index?: number
	bookmark?: boolean
	rowType?: 'pinned' | 'default' | 'accordion'
}
