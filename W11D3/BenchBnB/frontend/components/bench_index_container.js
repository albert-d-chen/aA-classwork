import {connect} from 'react-redux';

import BenchIndex from './bench_index.jsx';
import { fetchBenches } from '../actions/bench_actions';

// const mapStateToProps = (state) => {
//     return {
//         benches: Object.values(state.entities.benches)
//     }
// }

const mapStateToProps = ({entities:{benches}}) => {
    return {
        benches: Object.values(benches)
    }
}

const mapDispatchToProps = dispatch => ({
    fetchBenches: benches => dispatch(fetchBenches(benches))
});


export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);