import { connect } from 'react-redux';

const Cart = ({state, dsipatch}) => 
{
    return(
        <div>
           
        </div>
    );
};

const mapStateToProps = (state) => 
({
    currentUser : state.user.currentUser
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(Cart);