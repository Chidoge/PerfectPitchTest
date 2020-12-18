import React from 'react';
import { connect } from 'react-redux';
import Options from '../../components/Options/Options';
import TestingSection from '../../components/TestingSection/TestingSection';
import { changeInstrument, changeIsQuestionCompleted, changeSelectedNotes } from '../../store/actions/testSettings';

const mapStateToProps = (state: any) => {
    return {
        instrument: state.test.instrument,
        isQuestionCompleted: state.test.isQuestionCompleted,
        selectedNotes: state.test.selectedNotes
    }
}
  
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeSelectedNotes: (n: string) => dispatch(changeSelectedNotes(n)),
        changeInstrument: (i: string) => dispatch(changeInstrument(i)),
        changeIsQuestionCompleted: (i: boolean) => dispatch(changeIsQuestionCompleted(i))
    }
}

class Test extends React.Component<any, any> {
    render() {
        return (
            <div className="test-page container-flex-column-center">
                <TestingSection 
                    ordered={this.props.selectedNotes.sort()} 
                    isQuestionCompleted={this.props.isQuestionCompleted}
                    changeIsQuestionCompleted={this.props.changeIsQuestionCompleted}
                    instrument={this.props.instrument}
                />
                <Options 
                    ordered={this.props.selectedNotes.sort()}
                    isQuestionCompleted={this.props.isQuestionCompleted}
                    changeSelectedNotes={this.props.changeSelectedNotes}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)