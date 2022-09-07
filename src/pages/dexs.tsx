import * as React from 'react'
import Layout from '~/layout'
import DexsContainer from '~/containers/DexsContainer'
import { revalidate } from '~/api'
import { getNewDexsPageData } from '~/api/categories/dexs'

export async function getStaticProps() {
	const data = await getNewDexsPageData('All')
	return {
		...data,
		revalidate: revalidate()
	}
}

const Chains: React.FC<any> = (props) => {
	return (
		<Layout title={'All DEX volumes - DAppView'} defaultSEO>
			<DexsContainer {...props} />
		</Layout>
	)
}

export default Chains
