import React from 'react';
import { connect } from 'react-redux';
import Options from '../../components/Options/Options';
import TestingSection from '../../components/TestingSection/TestingSection';
import { changeInstrument, changeSelectedNotes } from '../../store/actions/testSettings';

const mapStateToProps = (state: any) => {
    return {
        selectedNotes: state.test.selectedNotes,
        instrument: state.test.instrument
    }
}
  
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeSelectedNotes: (n: string) => dispatch(changeSelectedNotes(n)),
        changeInstrument: (i: string) => dispatch(changeInstrument(i))
    }
}

class Test extends React.Component<any, any> {
    render() {
        return (
            <div className="test-page container-flex-column-center">
                <TestingSection ordered={this.props.selectedNotes.sort()} />
                <Options ordered={this.props.selectedNotes.sort()} changeSelectedNotes={this.props.changeSelectedNotes}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)