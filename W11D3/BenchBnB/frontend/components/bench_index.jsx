import React from 'react'
import BenchIndexItem from './bench_index_item'

class BenchIndex extends React.Component {

    componentDidMount() {
        this.props.fetchBenches();
    }

    render() {
        const benches = this.props.benches

        return (
            <div>
                <h1>Benches: </h1>
                {/* {benches.map(bench =>
                    <li key={bench.id}>
                        {bench.description}
                        <br/>
                        {bench.lat}
                        <br/>
                        {bench.lng}
                    </li>
                )} */}
                {benches.map(bench => <BenchIndexItem key={bench.id} bench={bench}/>)}
            </div>
        )
    }
}

export default BenchIndex;